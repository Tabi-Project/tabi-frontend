// export interface NavItem {
//   label: string;
//   href: string;
//   children?: NavItem[];
// }

// export const NAV_LINKS: NavItem[] = [
//   {
//     label: "Projects",
//     href: "#projects",
//     children: [
//       { label: "Tabi Women Network", href: "/projects/tabi-women-network" },
//       { label: "Open Source ", href: "/projects/open-source" },
//       { label: "AI for Business", href: "/ai-for-businesses" }
//       // { label: "Tabi Academy", href: "#projects/academy" },
//       // { label: "Tabi Project", href: "#projects/project" },
//       // { label: "Purple Guild", href: "#projects/purple-guild" }
//     ]
//   },
//   { label: "AI for Businesses", href: "/ai-for-businesses" },
//   {
//     label: "Resources",
//     href: "/resources",
//     children: [
//       { label: "News", href: "/resources" },
//       { label: "Blog Posts", href: "/resources?tab=blog" },
//       { label: "Events & Webinars", href: "/resources?tab=events" },
//       { label: "Case Studies", href: "/resources/case-studies" }
//     ]
//   },
//   { label: "Community", href: "/community" },
//   { label: "Consultancy", href: "/consultancy" },
//   { label: "About Us", href: "/about" }
// ];

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
      { label: "Navigation.openSource", href: "/projects/open-source" },
      { label: "Navigation.aiForBusiness", href: "/ai-for-businesses" }
    ]
  },
  { label: "Navigation.aboutUs", href: "/about" }
];