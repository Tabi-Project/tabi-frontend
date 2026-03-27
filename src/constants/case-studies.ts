export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  description: string;
  impact: string;
  image: string;
  themeColor: string;
  features: string[]; // Swapped 'stack' for 'features'
  stats: { label: string; value: string }[];
  links: {
    live: string;
    github: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "bloom-after",
    title: "Bloom After",
    tagline: "Postpartum Depression Support & Care",
    description:
      "A compassionate digital companion for mothers navigating PPD. Bloom After delivers clinically grounded information, a directory of verified specialists, and a location-aware clinic finder to ensure no woman suffers in silence.",
    impact:
      "Designed for new mothers and caregivers in Sub-Saharan Africa to reduce maternal isolation and bridge the gap in mental health access.",
    image: "/projects/bloom-mockup.png",
    themeColor: "#00695C",
    features: ["Specialist Directory", "Clinic Finder", "Self-Assessment", "Resource Library"],
    stats: [
      { label: "Solution", value: "Mental Health Bridge" }, // Changed Timeline to Solution
      { label: "Status", value: "MVP Live" }
    ],
    links: {
      live: "https://the-bloom-after.netlify.app/",
      github: "https://github.com/Tabi-Project/Bloom-After/blob/main/CONTRIBUTING.md"
    }
  },
  {
    id: "luminary",
    title: "Luminary",
    tagline: "Celebrating Women Making Global Impact",
    description:
      "A living directory and news platform dedicated to correcting the underrepresentation of women in media. Luminary makes the work of women in business, science, and activism visible, verifiable, and celebrated.",
    impact:
      "Built for journalists and organizers to discover role models, ensuring female leadership is documented and globally accessible.",
    image: "/projects/luminary-mockup-2.png",
    themeColor: "#c2185b",
    features: ["Impact Tracking", "Verified Biographies", "News Aggregator", "Mentorship Portal"],
    stats: [
      { label: "Solution", value: "Visibility Engine" }, // Changed Timeline to Solution
      { label: "Status", value: "MVP Live" }
    ],
    links: {
      live: "https://luminary-for-women.netlify.app/",
      github: "https://github.com/Tabi-Project/Luminary/blob/main/CONTRIBUTING.md"
    }
  },
  {
    id: "ekehi",
    title: "Ekehi",
    tagline: "SME & Business Resource Centre",
    description:
      "A business intelligence hub for women entrepreneurs. Ekehi aggregates active funding opportunities, credit facilities, and practical training resources in one searchable place.",
    impact:
      "Directly tackling the 'triple penalty' by providing African women-led SMEs with the capital and networks they need to scale.",
    image: "/projects/ekehi-mockup.png",
    themeColor: "#5b2d8e",
    features: ["Grant Database", "Credit Matchmaking", "Business Training", "Scaling Tools"],
    stats: [
      { label: "Solution", value: "Capital Access Hub" }, // Changed Timeline to Solution
      { label: "Status", value: "MVP Live" }
    ],
    links: {
      live: "https://ekehi.netlify.app/",
      github: "https://github.com/Tabi-Project/Ekehi/blob/main/CONTRIBUTING.md"
    }
  }
];
