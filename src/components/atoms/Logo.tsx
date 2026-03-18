import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/constants/paths";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
    >
      <Image
        src={withBasePath("/tabi-logo.svg")}
        alt="Tabi Academy Logo"
        width={120}
        height={40}
        priority
        className="object-contain"
      />
    </Link>
  );
};
