"use client";
import { Github } from "lucide-react";

export default function CaseStudiesCTA() {
  return (
    <section
      className="py-32 text-center text-white"
      style={{
        background: "linear-gradient(160deg, #0f0a1a 0%, #71286F 100%)"
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl lg:text-7xl font-black mb-8">
          Ready to <span className="opacity-40">Contribute?</span>
        </h2>
        <p className="text-white/60 mb-12">
          These are open-source projects primarily being built and maintained by
          Rise Academy Cohort 2. If you find this project interesting and you
          have good engineering skills, you&apos;re welcome to contribute to the
          project.
        </p>
        <a
          href="https://github.com/tabi-project"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
        >
          <Github size={20} /> View the Projects on GitHub
        </a>
      </div>
    </section>
  );
}
