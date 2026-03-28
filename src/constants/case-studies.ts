export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  description: string;
  impact: string;
  image: string;
  themeColor: string;
  features: string[];
  stats: { label: string; value: string }[];
  buttonText: string;
  contributors: { github: string; avatar: string }[];
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
    features: [
      "Specialist Directory",
      "Clinic Finder",
      "Self-Assessment",
      "Resource Library"
    ],
    stats: [
      { label: "Solution", value: "Mental Health Bridge" },
      { label: "Status", value: "MVP Live" }
    ],
    buttonText: "Use Bloom",
    contributors: [
      {
        github: "Chijex5",
        avatar: "https://avatars.githubusercontent.com/u/138696001?v=4"
      },
      {
        github: "devanike",
        avatar: "https://avatars.githubusercontent.com/u/156053615?v=4"
      },
      {
        github: "Prisca-01",
        avatar: "https://avatars.githubusercontent.com/u/110746159?v=4"
      },
      {
        github: "De-jola",
        avatar: "https://avatars.githubusercontent.com/u/104757999?v=4"
      },
      {
        github: "Shaelle11",
        avatar: "https://avatars.githubusercontent.com/u/138696001?v=4"
      },
      {
        github: "genevieveagugua",
        avatar: "https://avatars.githubusercontent.com/u/255832042?v=4"
      },
      {
        github: "nyakiochristine",
        avatar: "https://avatars.githubusercontent.com/u/98151711?s=64&v=4"
      },
      {
        github: "theonlySophia",
        avatar: "https://avatars.githubusercontent.com/u/100859618?s=64&v=4"
      },
      {
        github: "lowlifehighway",
        avatar: "https://avatars.githubusercontent.com/u/139157739?v=4"
      }
    ],
    links: {
      live: "https://the-bloom-after.netlify.app/",
      github:
        "https://github.com/Tabi-Project/Bloom-After/blob/main/CONTRIBUTING.md"
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
    features: [
      "Impact Tracking",
      "Verified Biographies",
      "News Aggregator",
      "Mentorship Portal"
    ],
    stats: [
      { label: "Solution", value: "Visibility Engine" }, // Changed Timeline to Solution
      { label: "Status", value: "MVP Live" }
    ],
    buttonText: "Use Luminary",
    contributors: [
      {
        github: "Yourgotopyromaniac",
        avatar: "https://avatars.githubusercontent.com/u/64610890?v=4"
      },
      {
        github: "chisomdaniel",
        avatar: "https://avatars.githubusercontent.com/u/59361666?s=64&v=4"
      },
      {
        github: "Blisyphus",
        avatar: "https://avatars.githubusercontent.com/u/111808790?v=4"
      },
      {
        github: "Rukkyoo",
        avatar: "https://avatars.githubusercontent.com/u/105046150?v=4"
      },
      {
        github: "Vaden89",
        avatar: "https://avatars.githubusercontent.com/u/99439561?v=4"
      },
      {
        github: "MrNaturi",
        avatar: "https://avatars.githubusercontent.com/u/115954743?s=64&v=4"
      }
    ],
    links: {
      live: "https://luminary-for-women.netlify.app/",
      github:
        "https://github.com/Tabi-Project/Luminary/blob/main/CONTRIBUTING.md"
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
    features: [
      "Grant Database",
      "Credit Matchmaking",
      "Business Training",
      "Scaling Tools"
    ],
    stats: [
      { label: "Solution", value: "Capital Access Hub" }, // Changed Timeline to Solution
      { label: "Status", value: "MVP Live" }
    ],
    buttonText: "Use Ekehi",
    contributors: [
      {
        github: "AJ1732",
        avatar: "https://avatars.githubusercontent.com/u/103790734?v=4"
      },
      {
        github: "MarionBraide",
        avatar: "https://avatars.githubusercontent.com/u/82952143?v=4"
      },
      {
        github: "first-afk",
        avatar: "https://avatars.githubusercontent.com/u/111287233?v=4"
      },
      {
        github: "Florence-code-hub",
        avatar: "https://avatars.githubusercontent.com/u/254754962?v=4"
      },
      {
        github: "luchiiii",
        avatar: "https://avatars.githubusercontent.com/u/83238269?v=4"
      },
      {
        github: "Pheonixai",
        avatar: "https://avatars.githubusercontent.com/u/172508892?s=64&v=4"
      },
      {
        github: "Okoukoni-Victor",
        avatar: "https://avatars.githubusercontent.com/u/128758738?v=4"
      }
    ],
    links: {
      live: "https://ekehi.netlify.app/",
      github: "https://github.com/Tabi-Project/Ekehi/blob/main/CONTRIBUTING.md"
    }
  }
];

export const IMPACT_STATS = [
  {
    label: "Total Women Reached",
    value: "2,500+",
    description: "Across all platforms"
  },
  {
    label: "Open Source Stars",
    value: "120+",
    description: "Community recognition"
  },
  {
    label: "Active Contributors",
    value: "15+",
    description: "Rise Academy engineers"
  },
  {
    label: "Success Stories",
    value: "45",
    description: "Documented career/health shifts"
  }
];