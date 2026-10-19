type SparkleProps = {
  className?: string;
  size?: number;
  color?: string;
  /** Twinkle animation delay (s) so multiple sparkles fall out of sync. */
  delay?: number;
  still?: boolean;
};

/** The four-point gold star used between the Featured Project images in the Figma. */
export function Sparkle({
  className = "",
  size = 40,
  color = "var(--color-tabi-gold)",
  delay = 0,
  still = false
}: SparkleProps) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`pointer-events-none ${still ? "" : "animate-twinkle"} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <path
        d="M20 0C21.2 11.5 28.5 18.8 40 20C28.5 21.2 21.2 28.5 20 40C18.8 28.5 11.5 21.2 0 20C11.5 18.8 18.8 11.5 20 0Z"
        fill={color}
      />
    </svg>
  );
}
