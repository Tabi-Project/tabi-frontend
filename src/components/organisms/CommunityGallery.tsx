"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Camera, ArrowRight } from "lucide-react";
import Image from "next/image";

// Import Lightbox and its CSS
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

export default function CommunityGallery({
  cmsImages = []
}: CommunityGalleryProps) {
  // 1. Set the default tab to "all"
  const [activeTab, setActiveTab] = useState("all");

  // 2. Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const CATEGORIES = [
    {
      id: "all",
      label: "All Moments",
      count: cmsImages.length // Total count of everything
    },
    {
      id: "learnable",
      label: "Learnable × Tabi",
      count: cmsImages.filter((img) => img.category === "learnable").length
    },
    {
      id: "sprints",
      label: "Open Source Sprints",
      count: cmsImages.filter((img) => img.category === "sprints").length
    },
    { id: "meetup", label: "Women in Business", count: 0, locked: true }
  ];

  // 3. Filter images dynamically. If "all", show everything!
  const filteredImages =
    activeTab === "all"
      ? cmsImages
      : cmsImages.filter((img) => img.category === activeTab);

  // 4. Prepare images for the lightbox array
  const lightboxSlides = filteredImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.caption
  }));

  return (
    <section className="py-24 bg-white overflow-hidden">
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
          <p className="mt-4 text-gray-600 font-light leading-relaxed">
            We don’t just talk about change; we document it. See how our members
            grow, excel, and thrive across our specialized tracks.
          </p>
        </div>

        {/* ── TABS TRIGGER ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeTab === category.id;

            return (
              <Button
                key={category.id}
                onClick={() => !category.locked && setActiveTab(category.id)}
                variant={isActive ? "primary" : "ghost"}
                size="sm"
                className={`
                  relative gap-2 font-bold transition-all duration-300
                  ${
                    category.locked
                      ? "bg-gray-50 text-gray-400 cursor-not-allowed border border-gray-100"
                      : isActive
                        ? "shadow-lg"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-brand-primary/40 hover:text-brand-primary"
                  }
                `}
              >
                {category.locked && <Lock size={12} className="opacity-60" />}
                {!category.locked && (
                  <Camera
                    size={12}
                    className={
                      isActive ? "text-white" : "text-brand-primary opacity-60"
                    }
                  />
                )}

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

                {category.locked && (
                  <span className="absolute -top-2 -right-2 bg-brand-surface text-brand-primary text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase border border-brand-primary/20">
                    Soon
                  </span>
                )}
              </Button>
            );
          })}
        </div>

        {/* ── UPGRADED PREMIUM BENTO GRID ── */}
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
                        alt={image.alt || "Tabi community moment"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Gradient Overlay for captions */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Caption */}
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
                    No images shipped yet
                  </h3>
                  <p className="text-sm text-gray-500 max-w-sm">
                    We are currently documenting this track. Check back after
                    the next sprint!
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 5. Lightbox Modal Component */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
      />
    </section>
  );
}
