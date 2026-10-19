"use client";

import { Suspense, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GradientText } from "@/components/atoms/GradientText";
import SectionHeading from "@/components/molecules/SectionHeading";

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
  return (
    <Suspense
      fallback={<div className="py-24 text-center">Loading Gallery...</div>}
    >
      <GalleryContent cmsImages={cmsImages} />
    </Suspense>
  );
}

function GalleryContent({ cmsImages = [] }: CommunityGalleryProps) {
  const t = useTranslations("Community.gallery");
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const CATEGORIES = [
    { id: "all", label: t("tabs.all") },
    { id: "learnable", label: t("tabs.learnable") },
    { id: "sprints", label: t("tabs.sprints") },
    { id: "meetup", label: t("tabs.meetup") }
  ];

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
    title: img.caption
  }));

  const categoriesWithCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count:
      cat.id === "all"
        ? cmsImages.length
        : cmsImages.filter((img) => img.category === cat.id).length
  }));

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <SectionHeading
          align="center"
          eyebrow={t("badge")}
          title={
            <>
              {t("heading")} <GradientText>{t("headingHighlight")}</GradientText>
            </>
          }
          className="mb-12"
        />

        <LayoutGroup id="gallery-tabs">
          <div className="mb-12 flex flex-wrap justify-center gap-2" role="tablist">
            {categoriesWithCounts.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    const url = new URL(window.location.href);
                    if (category.id === "all") {
                      url.searchParams.delete("tab");
                    } else {
                      url.searchParams.set("tab", category.id);
                    }
                    window.history.pushState({}, "", url.toString());
                  }}
                  className={`relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "bg-tabi-card/80 text-tabi-body hover:text-brand-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-pill"
                      className="absolute inset-0 rounded-full bg-brand-primary shadow-[0_8px_20px_-8px_rgba(113,40,111,0.7)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Camera size={13} className={isActive ? "text-white/80" : "text-brand-primary/60"} />
                    {category.label}
                    {category.count > 0 && (
                      <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${isActive ? "bg-white/20" : "bg-white text-tabi-body"}`}>
                        {category.count}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        <div className="relative min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5 auto-rows-[220px] md:auto-rows-[250px]"
            >
              {filteredImages.map((image, index) => {
                const isFeatured = index % 4 === 0;
                const isWide = index % 4 === 1;
                return (
                  <motion.button
                    type="button"
                    key={image.id}
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                    className={`
                      group relative cursor-pointer overflow-hidden rounded-[1.75rem] bg-tabi-lilac text-left ring-0 ring-brand-primary transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(113,40,111,0.6)] hover:ring-[3px]
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
                      <div className="absolute inset-0 bg-linear-to-t from-tabi-night/85 via-tabi-night/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-white text-sm font-bold mb-1">
                          {image.caption}
                        </p>
                        <p className="flex items-center gap-1 text-xs text-white/70">
                          {t("viewFullSize")} <ArrowRight size={10} />
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}

              {filteredImages.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-tabi-pink text-brand-primary">
                    <Camera size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-tabi-ink mb-1">
                    {t("emptyTitle")}
                  </h3>
                  <p className="max-w-sm text-sm text-tabi-body">
                    {t("emptyMessage")}
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
