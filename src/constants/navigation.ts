export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_LINKS: NavItem[] = [
  {
    label: "Projects",
    href: "#projects",
    children: [
      { label: "AI for Business", href: "/ai-for-businesses" },
      { label: "Tabi's Academy", href: "/projects/academy" },
      { label: "Tabi's Project", href: "/projects/project" },
      { label: "Purple Guild", href: "/projects/purple-guild" }
    ]
  },
  { label: "AI for Businesses", href: "/ai-for-businesses" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "News", href: "/resources" },
      { label: "Blog Posts", href: "/resources?tab=blog" },
      { label: "Events & Webinars", href: "/resources?tab=events" },
    ]
  },
  { label: "Community", href: "#community" },
  { label: "About Us", href: "/about" }
];
