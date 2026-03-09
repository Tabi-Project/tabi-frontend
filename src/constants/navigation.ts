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
      { label: "Case Studies", href: "/projects/cases" },
      { label: "Open Source", href: "/projects/oss" }
    ]
  },
  { label: "AI for Businesses", href: "/ai-for-businesses" },
  // {
  //   label: "Resources",
  //   href: "#resources",
  //   children: [
  //     { label: "Documentation", href: "/docs" },
  //     { label: "Brand Assets", href: "/brand" }
  //   ]
  // },
  { label: "Community", href: "#community" },
  { label: "About Us", href: "/about" }
];
