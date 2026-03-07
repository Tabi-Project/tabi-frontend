const OUTCOMES = [
  {
    number: "01",
    title: "AI Fluency for Business",
    description:
      "Understand how AI tools work and how to apply them strategically to your specific business context — with confidence.",
    icon: "🧠"
  },
  {
    number: "02",
    title: "Professional Brand & Design Assets",
    description:
      "Create a complete brand kit, visual identity, and UI mockups using AI-powered design tools — no design background needed.",
    icon: "🎨"
  },
  {
    number: "03",
    title: "A Live, Working Website or App",
    description:
      "Build and publish a fully functional landing page or simple application using AI — and walk away with a live URL.",
    icon: "🌐"
  },
  {
    number: "04",
    title: "An AI Agent Running for Your Business",
    description:
      "Deploy an automation workflow or AI agent handling a real task in your business — saving you time from week one.",
    icon: "⚡"
  },
  {
    number: "05",
    title: "A Capstone Project You're Proud Of",
    description:
      "Complete and present a full AI-powered business solution built around your own work — assessed by a live panel.",
    icon: "🏆"
  },
  {
    number: "06",
    title: "An Official AI for Business Certificate",
    description:
      "Earn a verified digital certificate upon passing the combined assessment — recognised proof of your new capabilities.",
    icon: "📜"
  }
];

export default function AIBusinessOutcomes() {
  return (
    <section className="w-full bg-[#fdf7ff]">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-flex items-center rounded-full border border-brand-primary/30 bg-white px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
            What You&apos;ll Achieve
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-[#1a1a2e] max-w-2xl leading-tight">
            Skills You Can Use the Day After Graduation
          </h2>
          <p className="mt-4 max-w-xl text-base text-[#666] leading-relaxed">
            Every outcome in this programme is tied to something you&apos;ll actually
            build. Not theory. Not slides. Real deliverables you can show, use,
            and grow with.
          </p>
        </div>

        {/* ── Outcomes grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OUTCOMES.map((outcome, i) => (
            <div
              key={outcome.number}
              className="group relative flex flex-col items-center text-center rounded-4xl p-8 bg-[#FFF5FF99]/40 border border-white/40 backdrop-blur-3xl hover:-translate-y-1 transition-all duration-300"
              style={{
                boxShadow: "0px 4px 12px 2px #3737371F",
                transitionDelay: `${i * 40}ms`
              }}
            >
              {/* Icon bubble */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                {outcome.icon}
              </div>

              <h3 className="text-lg font-bold text-[#1a1a2e] mb-3">
                {outcome.title}
              </h3>
              <p className="text-sm text-[#777] leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
