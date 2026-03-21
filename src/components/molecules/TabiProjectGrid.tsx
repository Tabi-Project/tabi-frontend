"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { CMSProject } from "@/lib/cms";
import { withBasePath } from "@/constants/paths";
import VideoModal from "@/components/atoms/VideoModal";
import VideoThumbnailButton from "@/components/atoms/VideoThumbnailButton";

export default function TabiProjectGrid({ project }: { project: CMSProject }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoSrc = project.video ?? withBasePath("/videos/tabi-project.mp4");
  const videoThumb =
    project.videoThumb ?? withBasePath("/projects/project-video.png");
  const collageImage =
    project.images?.[0] ?? withBasePath("/projects/project-collage.png");

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 items-start mb-6">
          <div className="flex flex-col justify-start py-2">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
              {project.title}
            </h3>
            <p className="text-sm text-[#666] leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex justify-start">
              <Link href={project.href ?? "/projects/project"}>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-50 sm:h-60 rounded-2xl overflow-hidden">
            <Image
              src={collageImage}
              alt="Project collage"
              fill
              sizes="(max-width: 640px) 45vw, 350px"
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <VideoThumbnailButton
          thumbnail={videoThumb}
          label="Watch Project Overview"
          accentColor="#1a1a2e"
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
