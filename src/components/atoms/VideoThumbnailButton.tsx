"use client";

import Image from "next/image";

interface VideoThumbnailButtonProps {
  thumbnail: string;
  label: string;
  accentColor?: string;
  onClick: () => void;
}

export default function VideoThumbnailButton({
  thumbnail,
  label,
  accentColor = "#71286F",
  onClick
}: VideoThumbnailButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-[#e5e5e5] group cursor-pointer"
    >
      <Image
        src={thumbnail}
        alt={label}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 896px"
        className="object-cover brightness-50 group-hover:brightness-40 transition-all duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill={accentColor}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
        {label}
      </div>
    </button>
  );
}
