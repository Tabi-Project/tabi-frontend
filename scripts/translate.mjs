import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import translate from "google-translate-api-x";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE = path.join(__dirname, "../src/messages/en.json");
const TARGET = path.join(__dirname, "../src/messages/fr.json");
const LANG = "fr";

let existingFr = {};
if (fs.existsSync(TARGET)) {
  try {
    existingFr = JSON.parse(fs.readFileSync(TARGET, "utf8"));
    console.log("📂 Loaded existing fr.json");
  } catch (e) {
    console.warn("⚠️ Could not parse existing fr.json, starting fresh");
  }
}

async function translateMissing(sourceObj, targetObj = {}, currentPath = "") {
  const result = { ...targetObj };

  for (const [key, val] of Object.entries(sourceObj)) {
    const fullKey = currentPath ? `${currentPath}.${key}` : key;

    if (typeof val === "string") {
      if (!(key in targetObj)) {
        console.log(`🌐 Translating (${fullKey}): "${val}"`);
        try {
          const res = await translate(val, { to: LANG });
          result[key] = res.text;
          await new Promise((resolve) => setTimeout(resolve, 500));
        } catch (e) {
          console.error(`❌ Failed on "${fullKey}":`, e.message);
          result[key] = val;
        }
      } else {
        result[key] = targetObj[key];
      }
    } else if (Array.isArray(val)) {
      // Handle arrays: translate each string or process each object
      if (!(key in targetObj)) {
        console.log(`🔄 Translating array (${fullKey})`);
        const translatedArray = [];
        for (const item of val) {
          if (typeof item === "string") {
            try {
              const res = await translate(item, { to: LANG });
              translatedArray.push(res.text);
              await new Promise((resolve) => setTimeout(resolve, 300));
            } catch (e) {
              console.error(
                `❌ Failed on array item in "${fullKey}":`,
                e.message
              );
              translatedArray.push(item);
            }
          } else if (item && typeof item === "object") {
            // Translate each property of the object
            const translatedItem = {};
            for (const [prop, propVal] of Object.entries(item)) {
              if (typeof propVal === "string") {
                try {
                  const res = await translate(propVal, { to: LANG });
                  translatedItem[prop] = res.text;
                  await new Promise((resolve) => setTimeout(resolve, 300));
                } catch (e) {
                  console.error(`❌ Failed on ${fullKey}[${prop}]:`, e.message);
                  translatedItem[prop] = propVal;
                }
              } else {
                translatedItem[prop] = propVal;
              }
            }
            translatedArray.push(translatedItem);
          } else {
            translatedArray.push(item);
          }
        }
        result[key] = translatedArray;
      } else {
        result[key] = targetObj[key];
      }
    } else if (val && typeof val === "object" && !Array.isArray(val)) {
      result[key] = await translateMissing(val, targetObj[key] || {}, fullKey);
    } else {
      result[key] = val;
    }
  }

  return result;
}

async function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error("❌ en.json not found.");
    return;
  }

  console.log("📖 Reading en.json...");
  const enContent = JSON.parse(fs.readFileSync(SOURCE, "utf8"));

  console.log("🔍 Checking for new/missing keys...");
  const frContent = await translateMissing(enContent, existingFr);

  console.log("💾 Writing fr.json...");
  fs.writeFileSync(TARGET, JSON.stringify(frContent, null, 2));

  console.log("✅ Done! New keys translated, existing preserved.");
}

main().catch(console.error);
