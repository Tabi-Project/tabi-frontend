// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Camera, ArrowRight } from "lucide-react";
// import Image from "next/image";

// // Import Lightbox and its CSS
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// import { Button } from "@/components/atoms/Button";

// interface GalleryImage {
//   id: string | number;
//   category: string;
//   src: string;
//   alt: string;
//   caption: string;
// }

// interface CommunityGalleryProps {
//   cmsImages: GalleryImage[];
// }

// export default function CommunityGallery({
//   cmsImages = []
// }: CommunityGalleryProps) {
//   // 1. Set the default tab to "all"
//   const [activeTab, setActiveTab] = useState("all");

//   // 2. Lightbox state
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   // 3. Updated Categories: "meetup" is now "Tabi Women Network" and unlocked
//   const CATEGORIES = [
//     {
//       id: "all",
//       label: "All Moments",
//       count: cmsImages.length
//     },
//     {
//       id: "learnable",
//       label: "Learnable × Tabi",
//       count: cmsImages.filter((img) => img.category === "learnable").length
//     },
//     {
//       id: "sprints",
//       label: "Open Source Sprints",
//       count: cmsImages.filter((img) => img.category === "sprints").length
//     },
//     {
//       id: "meetup",
//       label: "Tabi Women Network",
//       count: cmsImages.filter((img) => img.category === "meetup").length,
//       locked: false // Explicitly unlocked
//     }
//   ];

//   // 4. Filter images dynamically
//   const filteredImages =
//     activeTab === "all"
//       ? cmsImages
//       : cmsImages.filter((img) => img.category === activeTab);

//   // 5. Prepare images for the lightbox array
//   const lightboxSlides = filteredImages.map((img) => ({
//     src: img.src,
//     alt: img.alt,
//     title: img.caption
//   }));

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
//             Visual Proof
//           </span>
//           <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] tracking-tight">
//             Captured Moments of{" "}
//             <span className="italic text-brand-primary">Possibilities.</span>
//           </h2>
//           <p className="mt-4 text-gray-600 font-light leading-relaxed">
//             We don’t just talk about growth; we document it. See how our members
//             excel across our specialized network tracks and global editions.
//           </p>
//         </div>

//         {/* ── TABS TRIGGER ── */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {CATEGORIES.map((category) => {
//             const isActive = activeTab === category.id;

//             return (
//               <Button
//                 key={category.id}
//                 onClick={() => setActiveTab(category.id)}
//                 variant={isActive ? "primary" : "ghost"}
//                 size="sm"
//                 className={`
//                   relative gap-2 font-bold transition-all duration-300
//                   ${
//                     isActive
//                       ? "shadow-lg"
//                       : "bg-white text-gray-600 border border-gray-200 hover:border-brand-primary/40 hover:text-brand-primary"
//                   }
//                 `}
//               >
//                 <Camera
//                   size={12}
//                   className={
//                     isActive ? "text-white" : "text-brand-primary opacity-60"
//                   }
//                 />

//                 {category.label}

//                 {category.count > 0 && (
//                   <span
//                     className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
//                       isActive
//                         ? "bg-white/20 text-white"
//                         : "bg-gray-100 text-gray-500"
//                     }`}
//                   >
//                     {category.count}
//                   </span>
//                 )}
//               </Button>
//             );
//           })}
//         </div>

//         {/* ── BENTO GRID ── */}
//         <div className="relative min-h-100">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//               className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]"
//             >
//               {filteredImages.map((image, index) => {
//                 const isFeatured = index % 4 === 0;
//                 const isWide = index % 4 === 1;

//                 return (
//                   <div
//                     key={image.id}
//                     onClick={() => {
//                       setPhotoIndex(index);
//                       setIsOpen(true);
//                     }}
//                     className={`
//                       group relative rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer
//                       ${isFeatured ? "md:col-span-2 md:row-span-2" : ""} 
//                       ${isWide ? "md:col-span-2 md:row-span-1" : "md:col-span-1"}
//                     `}
//                   >
//                     <div className="relative w-full h-full">
//                       <Image
//                         src={image.src}
//                         alt={image.alt || "Tabi Women Network moment"}
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                       <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                         <p className="text-white text-sm font-bold mb-1">
//                           {image.caption}
//                         </p>
//                         <p className="text-white/60 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
//                           View Full Size <ArrowRight size={10} />
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Empty state */}
//               {filteredImages.length === 0 && (
//                 <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
//                   <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-gray-400">
//                     <Camera size={24} />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">
//                     No images uploaded yet
//                   </h3>
//                   <p className="text-sm text-gray-500 max-w-sm">
//                     We are currently documenting this track. The gallery for
//                     Tabi Women Network will appear here shortly.
//                   </p>
//                 </div>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       <Lightbox
//         open={isOpen}
//         close={() => setIsOpen(false)}
//         index={photoIndex}
//         slides={lightboxSlides}
//       />
//     </section>
//   );
// }



// components/organisms/CommunityGallery.tsx
"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button } from "@/components/atoms/Button";

interface GalleryImage {
  id: string | number;
  category: string;
  src: string;
  alt: string;
  caption: string;
}

interface CommunityGalleryProps {
  cmsImages: GalleryImage[];
}

// Static categories – defined outside to avoid re‑creation
const CATEGORIES = [
  { id: "all", label: "All Moments" },
  { id: "learnable", label: "Learnable × Tabi" },
  { id: "sprints", label: "Open Source Sprints" },
  { id: "meetup", label: "Tabi Women Network", locked: false },
];

export default function CommunityGallery({ cmsImages = [] }: CommunityGalleryProps) {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading Gallery...</div>}>
      <GalleryContent cmsImages={cmsImages} />
    </Suspense>
  );
}

function GalleryContent({ cmsImages = [] }: CommunityGalleryProps) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Derive activeTab directly from URL – no useEffect, no local state sync issues
  const activeTab = useMemo(() => {
    const tabQuery = searchParams.get("tab");
    if (tabQuery && CATEGORIES.some((cat) => cat.id === tabQuery)) {
      return tabQuery;
    }
    return "all";
  }, [searchParams]);

  const filteredImages = useMemo(() => {
    return activeTab === "all"
      ? cmsImages
      : cmsImages.filter((img) => img.category === activeTab);
  }, [activeTab, cmsImages]);

  const lightboxSlides = filteredImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.caption,
  }));

  // Compute category counts dynamically
  const categoriesWithCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: cat.id === "all" ? cmsImages.length : cmsImages.filter((img) => img.category === cat.id).length,
  }));

  return (
    <section
      id="community-gallery"
      className="scroll-mt-20 py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
            Visual Proof
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] tracking-tight">
            Captured Moments of{" "}
            <span className="italic text-brand-primary">Possibilities.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoriesWithCounts.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <Button
                key={category.id}
                onClick={() => {
                  // Update URL without full page reload
                  const url = new URL(window.location.href);
                  if (category.id === "all") {
                    url.searchParams.delete("tab");
                  } else {
                    url.searchParams.set("tab", category.id);
                  }
                  window.history.pushState({}, "", url.toString());
                }}
                variant={isActive ? "primary" : "ghost"}
                size="sm"
                className={`relative gap-2 font-bold transition-all duration-300 ${
                  isActive
                    ? "shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-brand-primary/40 hover:text-brand-primary"
                }`}
              >
                <Camera
                  size={12}
                  className={
                    isActive ? "text-white" : "text-brand-primary opacity-60"
                  }
                />
                {category.label}
                {category.count > 0 && (
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {category.count}
                  </span>
                )}
              </Button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <div className="relative min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]"
            >
              {filteredImages.map((image, index) => {
                const isFeatured = index % 4 === 0;
                const isWide = index % 4 === 1;
                return (
                  <div
                    key={image.id}
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                    className={`
                      group relative rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer
                      ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}
                      ${isWide ? "md:col-span-2 md:row-span-1" : "md:col-span-1"}
                    `}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-white text-sm font-bold mb-1">
                          {image.caption}
                        </p>
                        <p className="text-white/60 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
                          View Full Size <ArrowRight size={10} />
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Empty state */}
              {filteredImages.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-gray-400">
                    <Camera size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">
                    No images yet
                  </h3>
                  <p className="text-sm text-gray-500 max-w-sm">
                    We are currently documenting this track. The gallery will
                    appear here shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
      />
    </section>
  );
}