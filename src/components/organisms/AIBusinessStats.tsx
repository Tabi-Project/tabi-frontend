const STATS = [
  { value: "2 Weeks", label: "Intensive Live Training" },
  { value: "4 Days", label: "Hands-On Live Sessions" },
  { value: "6 Tools", label: "Learned & Applied" },
  { value: "100%", label: "Practical, Real-World Labs" }
];

export default function AIBusinessStats() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#ede8f5] rounded-3xl overflow-hidden bg-brand-surface/60">
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              className={`flex flex-col items-center justify-center text-center px-6 py-8
                ${i % 2 === 0 && i !== STATS.length - 1 ? "border-b md:border-b-0" : ""}
                ${i < STATS.length - 1 ? "md:border-r border-[#ede8f5]" : ""}
                ${i === 0 ? "border-b border-r md:border-b-0" : ""}
                ${i === 1 ? "border-b md:border-b-0" : ""}
              `}
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-primary leading-none">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-[#777] font-medium max-w-[120px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
