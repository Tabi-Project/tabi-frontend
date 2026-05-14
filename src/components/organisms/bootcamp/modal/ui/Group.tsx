import { C } from "../shared";

export function Group({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-5 space-y-4"
      style={{ background: C.surface, border: `1px solid ${C.border}` }}
    >
      {children}
    </div>
  );
}
