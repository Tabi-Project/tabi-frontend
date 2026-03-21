"use client";

import { LuX } from "react-icons/lu";

interface VideoModalProps {
  src: string;
  poster?: string;
  onClose: () => void;
}

export default function VideoModal({ src, poster, onClose }: VideoModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Close video"
        >
          <LuX size={18} />
        </button>
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          preload="none"
          className="w-full block"
          style={{ maxHeight: "80vh" }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}