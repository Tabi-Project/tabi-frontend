"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { withBasePath } from "@/constants/paths";


const IHUOMA_IMAGE = "/ihuoma-birthday.png";

/* ─── Confetti ──────────────────────────────────────────────────── */
type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  xVel: number;
  yVel: number;
  rotVel: number;
  shape: "rect" | "circle" | "star";
};

const COLORS = [
  "#71286F",
  "#c040a0",
  "#e070c0",
  "#f0a0d8",
  "#ffd700",
  "#ff9f43",
  "#fff",
  "#d4a8d4"
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function makeParticle(id: number, fromCentre = false): Particle {
  return {
    id,
    x: fromCentre ? randomBetween(30, 70) : randomBetween(5, 95),
    y: fromCentre ? randomBetween(40, 60) : randomBetween(-20, -5),
    size: randomBetween(6, 16),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotation: randomBetween(0, 360),
    xVel: fromCentre ? randomBetween(-4, 4) : randomBetween(-1.2, 1.2),
    yVel: fromCentre ? randomBetween(-6, -1) : randomBetween(1.2, 2.8),
    rotVel: randomBetween(-5, 5),
    shape: (["rect", "circle", "star"] as const)[Math.floor(Math.random() * 3)]
  };
}

// ConfettiCanvas accepts an onReady callback to expose the burst() fn
function ConfettiCanvas({ onReady }: { onReady: (burst: () => void) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const raf = useRef<number>(0);
  const idRef = useRef(0);

  useEffect(() => {
    // Initial gentle rain
    let count = 0;
    const spawn = () => {
      if (count < 120) {
        for (let i = 0; i < 6; i++)
          particles.current.push(makeParticle(idRef.current++));
        count += 6;
        setTimeout(spawn, 60);
      }
    };
    spawn();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter(
        (p) => p.y < canvas.height + 30
      );
      for (const p of particles.current) {
        ctx.save();
        ctx.translate((p.x / 100) * canvas.width, (p.y / 100) * canvas.height);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.9;
        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
            ctx.lineTo(
              Math.cos(angle) * (i === 0 ? p.size / 2 : p.size / 4),
              Math.sin(angle) * (i === 0 ? p.size / 2 : p.size / 4)
            );
          }
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
        p.x += p.xVel * 0.35;
        p.y += p.yVel * 0.65;
        p.rotation += p.rotVel;
        p.yVel += 0.02;
      }
      raf.current = requestAnimationFrame(draw);
    };
    draw();

    // Expose burst function to parent
    onReady(() => {
      // Fire 200 particles from the centre in a big explosion
      for (let i = 0; i < 200; i++) {
        particles.current.push(makeParticle(idRef.current++, true));
      }
    });

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}

/* ─── Storage ────────────────────────────────────────────────────────
   sessionStorage clears when the tab closes → modal shows once per
   visit (new tab = new visit, same tab = won't repeat). ✓

   The date key means after today the key never matches again,
   so the modal stops appearing automatically after the birthday. ✓
──────────────────────────────────────────────────────────────────── */
function getTodayKey() {
  const d = new Date();
  return `tabi_birthday_sophia_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}`;
}

/* ─── Modal ─────────────────────────────────────────────────────── */
export default function BirthdayModal() {
  const [open, setOpen] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const burstRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const key = getTodayKey();
    if (!sessionStorage.getItem(key)) {
      const t = setTimeout(() => setOpen(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(getTodayKey(), "1");
    setOpen(false);
    setCelebrating(false);
  }

  function celebrate() {
    if (celebrating) return;
    setCelebrating(true);
    burstRef.current?.(); // trigger confetti explosion
    setTimeout(dismiss, 2400); // close after the burst settles
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-9999 flex items-center justify-center p-4"
          style={{
            background: "rgba(10,6,18,0.75)",
            backdropFilter: "blur(8px)"
          }}
          onClick={dismiss}
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 26,
              delay: 0.05
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full overflow-hidden rounded-3xl"
            style={{
              maxWidth: "420px",
              boxShadow:
                "0 48px 120px rgba(113,40,111,0.55), 0 0 0 1px rgba(192,64,160,0.25)"
            }}
          >
            {/* Confetti — registers burst fn via onReady */}
            <ConfettiCanvas
              onReady={(fn) => {
                burstRef.current = fn;
              }}
            />

            {/* ── TOP: Full-bleed photo ─────────────────────── */}
            <div className="relative w-full" style={{ height: "340px" }}>
              <Image
                src={withBasePath(IHUOMA_IMAGE)}
                alt="Ihuoma Agbaru Favour"
                fill
                className="object-cover object-center brightness-95"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const fb = document.getElementById("ihuoma-fallback");
                  if (fb) fb.style.display = "flex";
                }}
              />
              <div
                id="sophia-fallback"
                className="absolute inset-0 items-center justify-center text-8xl select-none"
                style={{
                  display: "none",
                  background: "linear-gradient(160deg, #2d0f2b, #1a0a1e)"
                }}
              >
                🎂
              </div>

              {/* Photo → dark fade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, transparent 40%, rgba(26,10,30,0.6) 75%, #1a0a1e 100%)"
                }}
              />

              {/* Animated shimmer bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.75 pointer-events-none z-10">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full"
                  style={{
                    background:
                      "linear-gradient(90deg,#71286F,#c040a0,#f0a0d8,#ffd700,#c040a0,#71286F)",
                    backgroundSize: "200% 100%"
                  }}
                />
              </div>

              {/* Text overlaid on photo */}
              <div className="absolute bottom-5 left-0 right-0 z-20 text-center px-6">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] uppercase tracking-[0.3em] font-black mb-1"
                  style={{ color: "#f0a0d8" }}
                >
                  🎉 From the entire Tabi family
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="font-black text-white leading-tight"
                  style={{
                    fontSize: "clamp(1.6rem,5vw,2.1rem)",
                    fontFamily: "Georgia,'Times New Roman',serif",
                    textShadow: "0 2px 20px rgba(0,0,0,0.6)"
                  }}
                >
                  Happy Birthday,
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.68 }}
                  className="font-black leading-tight"
                  style={{
                    fontSize: "clamp(2rem,6vw,2.8rem)",
                    fontFamily: "Georgia,'Times New Roman',serif",
                    backgroundImage:
                      "linear-gradient(135deg,#f0b0d8 0%,#ffffff 50%,#e080c8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 12px rgba(192,64,160,0.5))"
                  }}
                >
                  Ihuoma! 🎂
                </motion.h2>
              </div>
            </div>

            {/* ── BOTTOM: Content panel ─────────────────────── */}
            <div
              className="relative z-20 px-7 pt-6 pb-8 text-center"
              style={{ background: "#1a0a1e" }}
            >
              <div
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-24 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(192,64,160,0.18) 0%, transparent 70%)"
                }}
              />

              {/* for sophia */}

              {/* <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="font-black text-white text-base mb-0.5"
              >
                Sophia Abubakar Ahuoyiza
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.82 }}
                className="text-[11px] uppercase tracking-[0.2em] mb-5 font-semibold"
                style={{ color: "#c040a0" }}
              >
                Director, Tabi Academy
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.86, duration: 0.5 }}
                className="mx-auto mb-5 h-px w-20"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(192,64,160,0.55), transparent)"
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-sm leading-relaxed mb-6 font-medium"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Whose vision, warmth, and leadership make everything we do
                possible. May this year bring you every joy you so generously
                give to others.
              </motion.p> */}

              {/* for ihuoma */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="font-black text-white text-base mb-0.5"
              >
                Ihuoma Favour Agbaru
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.82 }}
                className="text-[11px] uppercase tracking-[0.2em] mb-5 font-semibold"
                style={{ color: "#c040a0" }}
              >
                Co-Director, Tabi
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.86, duration: 0.5 }}
                className="mx-auto mb-5 h-px w-20"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(192,64,160,0.55), transparent)"
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-sm leading-relaxed mb-6 font-medium"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Whose purposeful leadership, dedication, and passion move women
                from capability to power. May this year reward you with the
                abundant joy and fulfillment you give to others.
              </motion.p>

              {/* ── Celebrate button — changes state when clicked ── */}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={celebrating ? {} : { scale: 1.04 }}
                whileTap={celebrating ? {} : { scale: 0.97 }}
                onClick={celebrate}
                disabled={celebrating}
                className="w-full py-3.5 rounded-xl font-black text-white text-sm tracking-wide relative overflow-hidden transition-all duration-300"
                style={{
                  background: celebrating
                    ? "linear-gradient(135deg, #c040a0, #ffd700, #c040a0)"
                    : "linear-gradient(135deg, #71286F, #c040a0)",
                  boxShadow: celebrating
                    ? "0 6px 36px rgba(255,215,0,0.45), 0 0 60px rgba(192,64,160,0.4)"
                    : "0 6px 28px rgba(113,40,111,0.55)",
                  backgroundSize: celebrating ? "200% 100%" : "100% 100%"
                }}
              >
                <AnimatePresence mode="wait">
                  {celebrating ? (
                    <motion.span
                      key="cheers"
                      initial={{ opacity: 0, y: 8, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      🥳 Cheers, Ihuoma! 🎊
                    </motion.span>
                  ) : (
                    <motion.span
                      key="cta"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Celebrate with us 🎊
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                onClick={dismiss}
                className="mt-4 text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
