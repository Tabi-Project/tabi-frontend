export interface NavItem {
  label: string; // Now a translation key, e.g., "Navigation.projects"
  href: string;
  children?: NavItem[];
}

export const NAV_LINKS: NavItem[] = [
  {
    label: "Navigation.aiForBusinesses",
    href: "/ai-for-businesses"
  },
  { label: "Navigation.community", href: "/community" },
  { label: "Navigation.consultancy", href: "/consultancy" },
  {
    label: "Navigation.resources",
    href: "/resources",
    children: [
      { label: "Navigation.news", href: "/resources" },
      { label: "Navigation.blog", href: "/resources?tab=blog" },
      { label: "Navigation.events", href: "/resources?tab=events" },
      { label: "Navigation.caseStudies", href: "/resources/case-studies" }
    ]
  },
  {
    label: "Navigation.projects",
    href: "#projects",
    children: [
      {
        label: "Navigation.tabiWomenNetwork",
        href: "/projects/tabi-women-network"
      },
      {
        label: "Navigation.fullStackBootcamp", // Add this key to your i18n JSON
        href: "/projects/javascript-bootcamp"
      },
      { label: "Navigation.openSource", href: "/projects/open-source" },
      { label: "Navigation.aiForBusiness", href: "/ai-for-businesses" }
    ]
  },
  { label: "Navigation.aboutUs", href: "/about" }
];