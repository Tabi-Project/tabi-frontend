"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { CMSProject } from "@/lib/cms";
import { withBasePath } from "@/constants/paths";
import VideoModal from "@/components/atoms/VideoModal";
import VideoThumbnailButton from "@/components/atoms/VideoThumbnailButton";

export default function AIBusinessGrid({ project }: { project: CMSProject }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoSrc = project.video ?? withBasePath("/videos/ai-business.mp4");
  const videoThumb =
    project.videoThumb ?? withBasePath("/projects/ai-business-video-thumb.png");
  const heroImage =
    project.images?.[0] ?? withBasePath("/ai-business-hero-3.png");

  return (
    <>
      <div className="w-full">
        {/* CHANGED: grid-cols-1 by default, grid-cols-2 on sm up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-6">
          <div className="flex flex-col justify-start py-2">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
              {project.title}
            </h3>
            <p className="text-sm text-[#666] leading-relaxed mb-6 sm:mb-8">
              {project.description}
            </p>
            <div className="flex justify-start">
              <Link href={project.href ?? "/ai-for-businesses"}>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-56 sm:h-60 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
            <Image
              src={heroImage}
              alt="AI for Business"
              fill
              sizes="(max-width: 640px) 100vw, 350px"
              className="object-contain"
              loading="lazy"
              quality={75}
            />
          </div>
        </div>

        <VideoThumbnailButton
          thumbnail={videoThumb}
          label="Watch Programme Overview"
          accentColor="#71286F"
          onClick={() => setVideoOpen(true)}
        />
      </div>

      {videoOpen && (
        <VideoModal
          src={videoSrc}
          poster={videoThumb}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </>
  );
}