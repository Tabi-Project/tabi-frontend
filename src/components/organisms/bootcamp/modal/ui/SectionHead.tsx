import { C } from "../shared";

export function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] font-black uppercase tracking-[0.24em] mb-4"
      style={{ color: C.subtle }}
    >
      {children}
    </p>
  );
}
