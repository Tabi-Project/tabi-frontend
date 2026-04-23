// // components/organisms/TWNWhatItIsNot.tsx
// import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

// export default function TWNWhatItIsNot() {
//   const isList = [
//     "An intimate, curated gathering",
//     "A table for real conversation",
//     "Structured for genuine outcomes",
//     "Pan‑African in scope and ambition"
//   ];
//   const notList = [
//     "A conference or summit",
//     "A networking event",
//     "A women's empowerment seminar",
//     "A panel or talk series"
//   ];

//   return (
//     <section className="py-20 bg-linear-to-b from-white via-brand-surface/10 to-brand-surface/20">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Optional eyebrow */}
//         <div className="text-center mb-12">
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em]">
//             <Sparkles size={12} /> The Tabi Distinction
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#2D102D] mt-4">
//             What we are, and what we are not.
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* LEFT: IT IS — bold, vibrant */}
//           <div className="bg-white rounded-4xl shadow-xl border border-brand-primary/10 overflow-hidden relative group hover:shadow-2xl transition-all duration-500">
//             <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
//             <div className="p-8 md:p-10">
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
//                   <CheckCircle2 className="w-5 h-5 text-brand-primary" />
//                 </div>
//                 <h3 className="text-2xl font-black text-brand-primary tracking-tight">
//                   This IS
//                 </h3>
//               </div>
//               <ul className="space-y-5">
//                 {isList.map((item) => (
//                   <li key={item} className="flex items-start gap-4">
//                     <span className="text-brand-primary mt-0.5 shrink-0">
//                       ✓
//                     </span>
//                     <span className="text-gray-800 font-semibold text-lg leading-tight">
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* RIGHT: IT IS NOT — subtle, muted, but still clear */}
//           <div className="bg-gray-50/80 rounded-4xl border border-gray-200 overflow-hidden relative group hover:bg-gray-100/80 transition-all duration-500">
//             <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-200 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
//             <div className="p-8 md:p-10">
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-10 h-10 rounded-2xl bg-gray-200 flex items-center justify-center">
//                   <XCircle className="w-5 h-5 text-gray-400" />
//                 </div>
//                 <h3 className="text-2xl font-black text-gray-400 tracking-tight">
                  
//                   This is NOT
//                 </h3>
//               </div>
//               <ul className="space-y-5">
//                 {notList.map((item) => (
//                   <li key={item} className="flex items-start gap-4">
//                     <span className="text-gray-300 mt-0.5 shrink-0">✗</span>
//                     <span className="text-gray-500 text-lg leading-tight line-through decoration-gray-300">
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Footer reinforcement */}
//         <div className="mt-12 text-center">
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-brand-primary/10">
//             <Sparkles size={14} className="text-brand-primary" />
//             <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
//               No panels · No keynotes · No performative networking
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/organisms/TWNWhatItIsNot.tsx
import { CheckCircle2, XCircle, Sparkles, ArrowRight } from "lucide-react";

export default function TWNWhatItIsNot() {
  const comparison = [
    { is: "An intimate, curated gathering", not: "A conference or summit" },
    { is: "A table for real conversation", not: "A networking event" },
    { is: "Structured for genuine outcomes", not: "A women's empowerment seminar" },
    { is: "Pan‑African in scope and ambition", not: "A panel or talk series" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <Sparkles size={12} fill="currentColor" /> The Tabi Distinction
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a2e] tracking-tight">
            The Table vs. The Stage
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            We are building something different. We’ve traded noise for depth and panels for partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-4 max-w-5xl mx-auto">
          {comparison.map((item, idx) => (
            <div 
              key={idx} 
              className="group grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-12 p-2"
            >
              {/* IT IS NOT - Left (Muted) */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 opacity-60 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <XCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-gray-500 font-medium text-lg italic">
                    {item.not}
                  </span>
                </div>
              </div>

              {/* CENTER DIVIDER */}
              <div className="hidden md:flex flex-col items-center justify-center">
                 <div className="w-px h-8 bg-gray-100" />
                 <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <ArrowRight size={16} />
                 </div>
                 <div className="w-px h-8 bg-gray-100" />
              </div>

              {/* IT IS - Right (Bold) */}
              <div className="bg-[#2D102D] rounded-3xl p-8 shadow-xl shadow-brand-primary/10 border border-brand-primary/20 relative overflow-hidden group-hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl rounded-full -mr-16 -mt-16" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                    {item.is}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer reinforcement */}
        <div className="mt-20 text-center">
          <p className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6">
            Tabi Culture
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {["No panels", "No keynotes", "No performative networking"].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-[#1a1a2e] font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                {tag}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}