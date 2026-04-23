"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToGallery() {
  const searchParams = useSearchParams();
  const shouldScroll = searchParams.get("tab") === "meetup";
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (!shouldScroll || hasScrolled.current) return;

    // Wait for the DOM to be fully painted and any layout shifts to settle
    const scroll = () => {
      const element = document.getElementById("community-gallery");
      if (element && !hasScrolled.current) {
        const offset = 80; // navbar height – adjust if needed
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        hasScrolled.current = true;
      } else if (!element) {
        // Element not ready – try again
        requestAnimationFrame(scroll);
      }
    };

    // Short delay to let React finish rendering and images start loading
    const timer = setTimeout(() => {
      requestAnimationFrame(scroll);
    }, 150);

    return () => clearTimeout(timer);
  }, [shouldScroll]);

  return null;
}
