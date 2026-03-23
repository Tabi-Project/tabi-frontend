"use client";

import { LuX } from "react-icons/lu";

interface VideoModalProps {
  src: string;
  poster?: string;
  onClose: () => void;
}

export default function VideoModal({ src, poster, onClose }: VideoModalProps) {
  // 1. Logic to check if the source is an external link (YouTube/Vimeo)
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  const isVimeo = src.includes("vimeo.com");
  const isExternal = isYouTube || isVimeo;

  // 2. Format YouTube links for embedding (if they aren't already)
  // Changes "watch?v=ID" to "embed/ID" automatically
  let embedSrc = src;
  if (isYouTube && src.includes("watch?v=")) {
    embedSrc = src.replace("watch?v=", "embed/");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Close video"
        >
          <LuX size={18} />
        </button>

        {isExternal ? (
          /* --- IFRAME for YouTube/Vimeo --- */
          <iframe
            src={`${embedSrc}?autoplay=1`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Player"
          />
        ) : (
          /* --- VIDEO TAG for Local Files (.mp4) --- */
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            preload="auto"
            className="w-full block"
            style={{ maxHeight: "80vh" }}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}
