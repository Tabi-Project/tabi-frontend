import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { CMSProject } from "@/lib/cms";
import { withBasePath } from "@/constants/paths";

export default function PurpleGuildGrid({ project }: { project: CMSProject }) {
  const logoImage =
    project.images?.[0] ?? withBasePath("/projects/purple-guild-logo.png");
  const images = project.images ?? [];

  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <div className="flex flex-col justify-start py-2 pr-4">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">
          {project.title}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="flex justify-start">
          <Link href={project.href ?? "/projects/purple-guild"}>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden">
        <Image
          src={logoImage}
          alt="Purple Guild"
          fill
          sizes="(max-width: 640px) 45vw, 350px"
          className="object-contain p-6"
          loading="lazy"
        />
      </div>
      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={images[1] ?? withBasePath("/projects/academy-1.png")}
          alt="Guild meeting"
          fill
          sizes="(max-width: 640px) 45vw, 350px"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={images[2] ?? withBasePath("/projects/academy-2.png")}
          alt="Guild graduation"
          fill
          sizes="(max-width: 640px) 45vw, 350px"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
