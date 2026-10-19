import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "white" | "soft";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-tabi-pill active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2";

  // Diagonal light sweep that crosses the button on hover
  const shine =
    "before:absolute before:inset-y-0 before:-left-1/2 before:-z-10 before:w-1/3 before:-skew-x-12 before:bg-white/25 before:transition-transform before:duration-700 hover:before:translate-x-[420%]";

  const variants = {
    primary: `bg-brand-primary text-white shadow-[0_6px_20px_-6px_rgba(113,40,111,0.55)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(113,40,111,0.6)] ${shine}`,
    outline:
      "border-[1.5px] border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:-translate-y-0.5",
    ghost: "text-brand-muted hover:text-brand-primary",
    white:
      "bg-white text-brand-primary shadow-[0_6px_20px_-8px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 before:absolute before:inset-y-0 before:-left-1/2 before:-z-10 before:w-1/3 before:-skew-x-12 before:bg-brand-primary/10 before:transition-transform before:duration-700 hover:before:translate-x-[420%]",
    soft: "bg-tabi-pink text-brand-primary hover:bg-brand-primary hover:text-white hover:-translate-y-0.5"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-[0.95rem]",
    lg: "px-8 py-3.5 text-base"
  };

  // Disabled styling: dimmed + forbid pointer events
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
