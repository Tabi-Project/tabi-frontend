import { C } from "../shared";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.16em]"
      style={{ background: `rgba(113,40,111,0.09)`, color: C.brand }}
    >
      {children}
    </span>
  );
}
