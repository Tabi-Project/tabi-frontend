export interface Member {
  name: string;
  role: string;
  industry:
    | "Technology"
    | "Policy"
    | "Governance"
    | "Creative"
    | "Management"
    | "Education";
  city: string;
  focus: string[];
  bio: string;
  socials: {
    linkedin?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    substack?: string;
  };
  image: string;
}

export const directoryMembers: Member[] =  [
  {
    name: "Sophia Ahuoyiza",
    role: "Software Engineer & Executive Director, Tabi",
    industry: "Technology",
    city: "Enugu",
    focus: ["Product Management", "Yelobyte Studios", "AI Automation"],
    bio: "Software Engineer and Co-founder of Yelobyte Studios, focused on making technology education accessible to women across Africa.",
    socials: {
      linkedin: "https://www.linkedin.com/in/sophia-abubakar/",
      website: "https://tabiproject.com",
      instagram:
        "https://www.instagram.com/sophiaoyiza?igsh=MWg5eXV2d2RhZ28xcA=="
    },
    image: "/directory/sophia-ahuoyiza.png"
  },
  {
    name: "Lady Benedeth Maduka",
    role: "Executive Director, Benedeth Maduka Foundation",
    industry: "Policy",
    city: "Enugu",
    focus: ["GBV Specialist", "Security Advocacy", "Leadership"],
    bio: "A retired Senior Police Officer and GBV specialist advocating for the belief that impact has no retirement age.",
    socials: {
      facebook: "https://www.facebook.com/share/1E84b1pQwJ/"
    },
    image: "/directory/benedeth.png"
  },
  {
    name: "Barrister Sylvia Agbana",
    role: "Chairperson, League of Women Voters Nigeria (Enugu)",
    industry: "Governance",
    city: "Enugu",
    focus: ["FIDA Enugu", "Legal Advocacy", "Women Rights"],
    bio: "Former Chairperson of FIDA Enugu, dedicated to creating safe spaces for women to lead and thrive in governance.",
    socials: { linkedin: "#", website: "#" },
    image: "/directory/image.png"
  },
  {
    name: "Augusta Nneka Nnadi",
    role: "SA on Strategy & Communications (SEDC)",
    industry: "Governance",
    city: "Enugu",
    focus: ["Politics", "Policy Specialist", "Strategic Comms"],
    bio: "Politics and Policy specialist pushing for qualified women with 'proof of work' to take up space in political systems.",
    socials: {
      linkedin: "https://www.linkedin.com/in/augusta-nneka-b32b981b4/",
      twitter: "https://twitter.com/nneka_augusta",
      instagram: "https://www.instagram.com/n.n.e.k.a/?hl=en",
      facebook: "https://www.facebook.com/augusta.nneka.7?mibextid=LQQJ4d",
      substack: "https://augustanneka.substack.com/"
    },
    image: "/directory/augusta.jpeg"
  },
  {
    name: "Betty Agbo",
    role: "Creative Director, Betscents",
    industry: "Creative",
    city: "Enugu",
    focus: ["Filmmaking", "Acting", "Creative Branding"],
    bio: "Filmmaker and Actor leading through storytelling, encouraging women to take bold actions in the creative economy.",
    socials: {
      linkedin: "https://www.linkedin.com/in/betty-agbo-080617170/",
      instagram:
        "https://www.instagram.com/officialbettyagbo?igsh=MWwxa3czbXAweGg4eA=="
    },
    image: "/directory/betty.png"
  },
  {
    name: "Amarachi Okeke",
    role: "Product Manager & NGO Lead",
    industry: "Technology",
    city: "Enugu",
    focus: ["Sustainability", "Product Strategy", "Social Initiatives"],
    bio: "Product Manager co-running Sustainable Initiatives NGO, bridging the gap between tech efficiency and social good.",
    socials: {
      linkedin: "https://www.linkedin.com/in/amarachi-okeke-b4b486236/"
    },
    image: "/directory/amara.png"
  },
  {
    name: "Tracy Jerry Ugwu",
    role: "Product Marketing Lead & Co-founder",
    industry: "Education",
    city: "Enugu",
    focus: ["Special Needs Education", "Inclusive Learning", "PMM"],
    bio: "Co-founder of an inclusive school for special needs children and a seasoned lead in Product Marketing.",
    socials: {
      linkedin: "https://www.linkedin.com/in/tracy-jerry-ugwu/",
      instagram: "https://www.instagram.com/tracy_ug?igsh=MTk3eDlsejFxOGw1dQ=="
    },
    image: "/directory/tracy.png"
  },
  {
    name: "Ijeoma Achu",
    role: "Program’s Manager, Tabi",
    industry: "Management",
    city: "Enugu",
    focus: ["Program Strategy", "Operational Excellence", "Community"],
    bio: "Orchestrating the framework and delivery of Tabi’s missions to ensure impactful results for every cohort.",
    socials: {
      linkedin: "https://www.linkedin.com/in/ijeoma-achu/"
    },
    image: "/directory/ijeoma.png"
  }
];