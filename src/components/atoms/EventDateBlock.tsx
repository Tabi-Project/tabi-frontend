import Image from "next/image";

interface EventDateBlockProps {
  month: string;
  day: string;
  image: string;
  alt: string;
  size?: "sm" | "md";
}

export default function EventDateBlock({
  month,
  day,
  image,
  alt,
  size = "md"
}: EventDateBlockProps) {
  const dimensions =
    size === "sm" ? "w-[100px] h-[90px]" : "w-[120px] h-[110px]";

  return (
    <div
      className={`relative ${dimensions} rounded-xl overflow-hidden shrink-0`}
    >
      {/* Background image with dark overlay */}
      <Image src={image} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />

      {/* Date text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white leading-none">
        <span className="text-[10px] font-semibold tracking-widest uppercase opacity-90">
          {month}
        </span>
        <span className="text-[2.2rem] font-extrabold leading-none">{day}</span>
      </div>
    </div>
  );
}
