import Image from "next/image";

interface AuthorAvatarProps {
  name?: string;
  avatar?: string;
  size?: number;
}

function getInitials(name?: string): string {
  if (!name) return "?";
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export default function AuthorAvatar({
  name,
  avatar,
  size = 32
}: AuthorAvatarProps) {
  if (avatar) {
    return (
      <div
        className="rounded-full overflow-hidden relative shrink-0 border border-[#ede8f5]"
        style={{ width: size, height: size }}
      >
        <Image
          src={avatar}
          alt={name ?? "Author"}
          fill
          className="object-cover"
          sizes={`${size}px`}
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-full shrink-0 flex items-center justify-center text-white font-bold"
      style={{
        width: size,
        height: size,
        background: "#71286F",
        fontSize: size * 0.35
      }}
    >
      {getInitials(name)}
    </div>
  );
}
