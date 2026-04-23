// components/organisms/TWNFaq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Who can attend Tabi Women Network events?",
    a: "Attendance is strictly by personal invitation. Each edition is curated specifically for women in executive, senior, founder, or leadership roles across tech, business, and governance. If you have received an invitation, you belong in the room."
  },
  {
    q: "Can I request an invitation?",
    a: "Women interested in attending a future edition or hosting one in their city can express interest via our city request form or by reaching out to sophia@tabiproject.com. Curation is intentional, so not every expression of interest will result in an invitation."
  },
  {
    q: "Can I bring a guest?",
    a: "Each invitation admits one person only. To maintain the intimacy of the table, we do not allow +1s. However, if you believe another woman should be at the table, you are encouraged to mention her to the host. The team will consider extending a separate invitation."
  },
  {
    q: "Is there a cost to attend?",
    a: "Attendance details, including any applicable costs for the curated dining experience, are communicated directly to guests upon confirmation of their invitation."
  },
  {
    q: "What is the policy on arrival time?",
    a: "We are building a culture of respect for time. Each event starts exactly at the stated time. Guests are welcomed from 15 minutes before the start, and we ask that you arrive early to settle in before the roundtables begin."
  },
  {
    q: "How do I get Tabi Women Network in my city?",
    a: "We are expanding monthly across Africa. If you want us to land in your city next, please use our 'Indicate Interest' form. We prioritize new locations based on where our community demand is strongest."
  },
  {
    q: "What happens after the event?",
    a: "Every attendee is added to the Tabi Women Network member directory—a living resource designed to help members find collaborators and build real partnerships across borders and sectors."
  },
  {
    q: "Is the event recorded?",
    a: "The core programme and conversations at the table are never recorded to ensure authenticity and vulnerability. What is said at the table stays at the table. We do, however, have a media team available for optional seated interviews during the open networking segment."
  },
  {
    q: "How often does the network meet?",
    a: "Editions are held monthly in different cities across Africa. Members are welcome to attend editions in their home city and may be invited to editions in other cities where they have a professional presence."
  }
];

const FAQItem = ({
  faq,
  isOpen,
  onClick
}: {
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${isOpen ? "ring-1 ring-brand-primary/10" : ""}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer text-left focus:outline-none"
      >
        <span
          className={`font-bold transition-colors duration-300 ${isOpen ? "text-brand-primary" : "text-[#1a1a2e]"} pr-4`}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="text-brand-primary shrink-0"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8 text-gray-600 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function TWNFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
            Clarity
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1a1a2e]">
            Common Questions
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Everything you need to know about the Tabi Women Network experience.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Have more questions? Contact{" "}
            <a
              href="mailto:sophia@tabiproject.com"
              className="text-brand-primary font-bold hover:underline"
            >
              sophia@tabiproject.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
