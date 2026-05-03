import Image from "next/image";
import { withBasePath } from "@/constants/paths";

export default function EventsLocationBanner() {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 mt-16 h-35 sm:h-50 lg:h-65 overflow-hidden">

      {/* Full-width map background */}
      <Image
        src={withBasePath("/events/map.png")}
        alt="Event location map"
        fill
        className="object-cover"
      />

      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(272.3deg,rgba(113,40,111,0.09)_32.71%,rgba(113,40,111,0.729)_46.94%,rgba(113,40,111,0.9)_67.85%)]" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-5 sm:px-12 lg:px-20">
        <div className="text-white">
          {/* Logo + name row */}
          <div className="flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 border-b-2 sm:border-b-4 border-white mb-3 sm:mb-4">
            <div className="relative shrink-0 w-8 h-5.5 sm:w-15 sm:h-10.5 lg:w-22.5 lg:h-16">
              <Image
                src={withBasePath("/tabi-logo-white.svg")}
                alt="TEE Foundation"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg sm:text-3xl lg:text-5xl font-bold tracking-tight leading-none">
              TEE Foundation
            </span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-1.5 sm:gap-2 text-white font-medium text-[11px] sm:text-sm lg:text-base">
            <svg
              className="mt-0.5 shrink-0 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.49-2.01-4.5-4.5-4.5z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="8"
                cy="6"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
            <span className="max-w-50 sm:max-w-xs lg:max-w-sm leading-snug">
              Enugu, Nigeria.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
