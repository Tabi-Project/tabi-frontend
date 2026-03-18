import { LegalSection } from "@/types/legal";

export const PRIVACY_META = {
  title: "Privacy Policy",
  organization: "Tabi Empowerment & Educational Foundation (TEE Foundation)",
  effectiveDate: "January 2026",
  lastUpdated: "January 2026",
  footerNote:
    "This Privacy Policy was last reviewed and updated in January 2026."
};

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    number: "1",
    title: "Who We Are",
    content: [
      {
        type: "paragraph",
        text: "Tabi Empowerment & Educational Foundation is a non-profit organisation registered in Nigeria, dedicated to empowering women through education, mentorship, and technology. We operate through three arms: TEE Foundation (governing body), Tabi Academy (education and training), and Tabi Project (community impact initiatives)."
      },
      {
        type: "paragraph",
        text: "For the purposes of data protection, TEE Foundation is the data controller responsible for your personal information."
      }
    ]
  },
  {
    number: "2",
    title: "Information We Collect",
    content: [
      {
        type: "subsection",
        number: "2.1",
        title: "Information You Provide Directly",
        text: "When you register for a programme, make a donation, or contact us, we may collect the following:",
        bullets: [
          "Full name and contact details (email address, phone number, location)",
          "Payment information (processed securely through our third-party payment providers; we do not store full card details)",
          "Educational background and professional information (for programme eligibility and matching)",
          "Emergency contact information (where relevant to in-person programmes)",
          "Communications and correspondence you send to us"
        ]
      },
      {
        type: "subsection",
        number: "2.2",
        title: "Information Collected Automatically",
        text: "When you visit our website, we may automatically collect:",
        bullets: [
          "Browser type, device type, and operating system",
          "IP address and approximate geographic location",
          "Pages visited, time spent on site, and referring URLs",
          "Cookie data and analytics information (see Section 7 on Cookies)"
        ]
      }
    ]
  },
  {
    number: "3",
    title: "How We Use Your Information",
    content: [
      {
        type: "paragraph",
        text: "We use the information we collect for the following purposes:"
      },
      {
        type: "bullets",
        items: [
          "To process programme registrations and confirm enrolments",
          "To process payments and issue receipts or invoices",
          "To communicate important updates about your programme or registration",
          "To send our Annual Impact Report to donors and contributors",
          "To deliver and improve our educational content and community services",
          "To send newsletters, event updates, or programme announcements (with your consent)",
          "To comply with legal and regulatory obligations",
          "To analyse and improve the performance of our platforms and programmes"
        ]
      },
      {
        type: "paragraph",
        text: "We will not use your data for purposes incompatible with those listed above without your explicit consent."
      }
    ]
  },
  {
    number: "4",
    title: "Legal Basis for Processing",
    content: [
      {
        type: "paragraph",
        text: "We process your personal data on the following legal bases:"
      },
      {
        type: "bullets",
        items: [
          "Contract performance — processing necessary to register you in a programme or process your payment.",
          "Legitimate interests — improving our services, communicating impact, and ensuring the safety of our community.",
          "Consent — for marketing communications and non-essential cookies. You may withdraw consent at any time.",
          "Legal obligation — where we are required to process data to comply with Nigerian law or regulatory requirements."
        ]
      }
    ]
  },
  {
    number: "5",
    title: "Sharing Your Information",
    content: [
      {
        type: "paragraph",
        text: "Tabi does not sell, rent, or trade your personal data to third parties. We may share your information in the following limited circumstances:"
      },
      {
        type: "bullets",
        items: [
          "Service providers: We work with trusted third-party providers (such as payment processors, email platforms, and website hosting services) who access your data solely to perform services on our behalf and are bound by confidentiality obligations.",
          "Legal requirements: We may disclose your information where required by law, court order, or governmental authority.",
          "Programme partners: Where a programme is delivered in partnership with another organisation, we may share relevant participant information with that partner, subject to appropriate data protection agreements."
        ]
      },
      {
        type: "paragraph",
        text: "All third parties are required to handle your data securely and in accordance with applicable data protection law."
      }
    ]
  },
  {
    number: "6",
    title: "Payments and Financial Data",
    content: [
      {
        type: "paragraph",
        text: "All payment transactions on Tabi's platforms are processed by Paystack, a PCI-DSS compliant third-party payment provider. Tabi does not store, process, or have access to your full card details. By making a payment on our platform, you are subject to Paystack's Privacy Policy and Terms of Service in addition to ours."
      },
      {
        type: "paragraph",
        text: "Donation records and programme payment records are retained for a minimum of 7 years in line with financial and regulatory requirements."
      }
    ]
  },
  {
    number: "7",
    title: "Cookies",
    content: [
      {
        type: "paragraph",
        text: "Our website uses cookies to enhance your experience and gather analytics data. Cookies are small data files placed on your device. We use:"
      },
      {
        type: "bullets",
        items: [
          "Essential cookies — necessary for the website to function properly.",
          "Analytics cookies — to understand how visitors interact with our site (e.g., Google Analytics).",
          "Preference cookies — to remember your settings and preferences."
        ]
      },
      {
        type: "paragraph",
        text: "You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website."
      }
    ]
  },
  {
    number: "8",
    title: "Data Retention",
    content: [
      {
        type: "paragraph",
        text: "We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Specifically:"
      },
      {
        type: "bullets",
        items: [
          "Programme registration data is retained for a minimum of 3 years after the completion of the programme.",
          "Financial and donation records are retained for a minimum of 7 years.",
          "Marketing contact data is retained until you unsubscribe or withdraw consent."
        ]
      },
      {
        type: "paragraph",
        text: "When data is no longer needed, it is securely deleted or anonymised."
      }
    ]
  },
  {
    number: "9",
    title: "Your Rights",
    content: [
      {
        type: "paragraph",
        text: "You have the following rights with respect to your personal data:"
      },
      {
        type: "bullets",
        items: [
          "Right of access — to request a copy of the personal data we hold about you.",
          "Right to rectification — to request correction of inaccurate or incomplete data.",
          "Right to erasure — to request deletion of your data, subject to our legal obligations.",
          "Right to restrict processing — to request that we limit how we use your data.",
          "Right to object — to object to our processing of your data for specific purposes.",
          "Right to data portability — to receive your data in a structured, commonly used format.",
          "Right to withdraw consent — where processing is based on consent, you may withdraw it at any time without affecting prior processing."
        ]
      },
      {
        type: "paragraph",
        text: "To exercise any of these rights, please contact us at hello@tabiproject.com. We will respond to all requests within 30 days."
      }
    ]
  },
  {
    number: "10",
    title: "Children's Privacy",
    content: [
      {
        type: "paragraph",
        text: "Our services are primarily intended for adults aged 18 and over. Where we offer programmes to participants under 18, we require verifiable parental or guardian consent before collecting any personal data. We do not knowingly collect personal data from minors without appropriate consent."
      }
    ]
  },
  {
    number: "11",
    title: "Data Security",
    content: [
      {
        type: "paragraph",
        text: "We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, loss, or destruction. These include secure data storage, access controls, and use of reputable, secure third-party platforms."
      },
      {
        type: "paragraph",
        text: "Despite these measures, no method of internet transmission or electronic storage is 100% secure. We encourage you to use strong passwords and to notify us immediately if you suspect any unauthorised use of your account."
      }
    ]
  },
  {
    number: "12",
    title: "Third-Party Links",
    content: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites or social media platforms. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently."
      }
    ]
  },
  {
    number: "13",
    title: "Changes to This Policy",
    content: [
      {
        type: "paragraph",
        text: "Tabi may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated Policy will be published on our website with a revised effective date. We encourage you to review this Policy periodically. Where changes are material, we will notify you directly where possible."
      }
    ]
  },
  {
    number: "14",
    title: "Contact Us",
    content: [
      {
        type: "paragraph",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out to us:"
      },
      {
        type: "contact",
        lines: [
          "Tabi Empowerment & Educational Foundation",
          "Email: hello@tabiproject.com",
          "Website: tabiproject.com"
        ]
      }
    ]
  }
];
