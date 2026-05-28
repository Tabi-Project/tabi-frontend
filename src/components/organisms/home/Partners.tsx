// "use client";

// import { useTranslations } from "next-intl";
// import { withBasePath } from "@/constants/paths";
// import Image from "next/image";

// export default function Partners() {
//   const t = useTranslations("Partners");

//   const PARTNERS = [
//     {
//       id: "yip",
//       src: withBasePath("/partners/yip.png"),
//       alt: t("logos.yip")
//     },
//     {
//       id: "gutsy",
//       src: withBasePath("/partners/gutsy-woman.png"),
//       alt: t("logos.gutsy")
//     },
//     {
//       id: "yebox",
//       src: withBasePath("/partners/yebox.png"),
//       alt: t("logos.yebox")
//     },
//     {
//       id: "genesys",
//       src: withBasePath("/partners/genesys.png"),
//       alt: t("logos.genesys")
//     },
//     {
//       id: "risevest",
//       src: withBasePath("/partners/rise.png"),
//       alt: t("logos.risevest")
//     },
//     {
//       id: "cchub",
//       src: withBasePath("/partners/cchub.png"),
//       alt: t("logos.cchub")
//     },
//     {
//       id: "sailscast",
//       src: withBasePath("/partners/sailscast-full.png"),
//       alt: t("logos.sailscast")
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-10 sm:py-14">
//       <div className="mx-auto max-w-350 px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
//         <p className="shrink-0 max-w-96 text-2xl font-semibold text-black leading-relaxed text-center sm:text-left">
//           {t("title")}
//         </p>

//         <div className="hidden sm:block h-12 w-px bg-white/10 shrink-0" />

//         <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8 sm:gap-12 flex-1">
//           {PARTNERS.map((p) => (
//             <div
//               key={p.id}
//               className="relative h-14 w-28 sm:h-16 sm:w-32 grayscale brightness-150 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//             >
//               <Image src={p.src} alt={p.alt} fill className="object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useTranslations } from "next-intl";
import { withBasePath } from "@/constants/paths";
import Image from "next/image";

export default function Partners() {
  const t = useTranslations("Partners");

  const PARTNERS = [
    { id: "yip", src: withBasePath("/partners/yip.png"), alt: t("logos.yip") },
    {
      id: "gutsy",
      src: withBasePath("/partners/gutsy-woman.png"),
      alt: t("logos.gutsy")
    },
    {
      id: "yebox",
      src: withBasePath("/partners/yebox.png"),
      alt: t("logos.yebox")
    },
    {
      id: "genesys",
      src: withBasePath("/partners/genesys.png"),
      alt: t("logos.genesys")
    },
    {
      id: "risevest",
      src: withBasePath("/partners/rise.png"),
      alt: t("logos.risevest")
    },
    {
      id: "cchub",
      src: withBasePath("/partners/cchub.jpeg"),
      alt: t("logos.cchub")
    },
    {
      id: "sailscast",
      src: withBasePath("/partners/sailscast-full.png"),
      alt: t("logos.sailscast")
    }
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-350 px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
        <p className="shrink-0 max-w-96 text-2xl font-semibold text-black leading-relaxed text-center sm:text-left">
          {t("title")}
        </p>

        <div className="hidden sm:block h-12 w-px bg-white/10 shrink-0" />

        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8 sm:gap-12 flex-1">
          {PARTNERS.map((p) => (
            <div
              key={p.id}
              className="relative h-14 w-28 sm:h-16 sm:w-32 grayscale brightness-150 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}