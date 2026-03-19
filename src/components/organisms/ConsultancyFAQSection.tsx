import ConsultancyFAQItem from "@/components/molecules/ConsultancyFAQItem";
import { FAQS } from "@/constants/consultancy";

export default function ConsultancyFAQSection() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16">
          {/* Left */}
          <div>
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
              style={{ background: "#F3E8FF" }}
            >
              FAQs
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#1a1a2e] leading-snug mb-4">
              Common questions
            </h2>
            <p className="text-base text-[#666] leading-relaxed">
              Still unsure? Here are answers to the questions we get most often.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="bg-white rounded-3xl px-8 py-2 divide-y divide-gray-100">
            {FAQS.map((item, i) => (
              <ConsultancyFAQItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
