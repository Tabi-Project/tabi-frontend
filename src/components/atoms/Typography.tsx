import React from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({
  variant = "p",
  children,
  className = ""
}: TypographyProps) => {
  const Component = variant;

  // Define base styles for each variant to stay consistent
  const baseStyles = {
    h1: "text-5xl lg:text-6xl font-extrabold tracking-tight",
    h2: "text-4xl lg:text-5xl font-bold tracking-tight",
    h3: "text-2xl lg:text-3xl font-semibold",
    h4: "text-xl font-medium",
    p: "text-base leading-relaxed",
    span: ""
  };

  return (
    <Component className={`${baseStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

// Keep your existing NavLink here too
export const NavLink = ({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-1"
  >
    {children}
  </a>
);
