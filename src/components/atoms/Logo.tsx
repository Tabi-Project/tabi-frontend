import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
    >
      <Image
        src="/Tabi-logo.svg"
        alt="Tabi Academy Logo"
        width={120} // Adjust based on your Nav Bar.png proportions
        height={40}
        priority // Ensures logo loads immediately without lag
        className="object-contain"
      />
    </Link>
  );
};
