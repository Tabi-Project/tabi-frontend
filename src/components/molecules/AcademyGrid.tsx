import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { CMSProject } from "@/lib/cms";
import { withBasePath } from "@/constants/paths";

export default function AcademyGrid({ project }: { project: CMSProject }) {
  const images = project.images ?? [
    withBasePath("/projects/academy-1.png"),
    withBasePath("/projects/academy-2.png"),
    withBasePath("/projects/academy-3.png")
  ];

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
          <Link href={project.href ?? "/projects/academy"}>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={images[0]}
          alt="Students collaborating"
          fill
          loading="lazy"
          sizes="(max-width: 640px) 45vw, 350px"
          className="object-cover"
          quality={75}
        />
      </div>
      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={images[1] ?? images[0]}
          alt="Women in tech meeting"
          fill
          sizes="(max-width: 640px) 45vw, 350px"
          className="object-cover"
          loading="lazy"
          quality={75}
        />
      </div>
      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-primary/40">
        <Image
          src={images[2] ?? images[0]}
          alt="Graduation ceremony"
          fill
          sizes="(max-width: 640px) 45vw, 350px"
          className="object-cover"
          loading="lazy"
          quality={75}
        />
      </div>
    </div>
  );
}
