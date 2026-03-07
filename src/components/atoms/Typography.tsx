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
