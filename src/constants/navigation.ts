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
      { label: "Open Source ", href: "/projects/open-source" },
      { label: "AI for Business", href: "/ai-for-businesses" },
      // { label: "Tabi Academy", href: "#projects/academy" },
      // { label: "Tabi Project", href: "#projects/project" },
      // { label: "Purple Guild", href: "#projects/purple-guild" }
    ]
  },
  { label: "AI for Businesses", href: "/ai-for-businesses" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "News", href: "/resources" },
      { label: "Blog Posts", href: "/resources?tab=blog" },
      { label: "Events & Webinars", href: "/resources?tab=events" }
    ]
  },
  // { label: "Community", href: "#community" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "About Us", href: "/about" }
];
