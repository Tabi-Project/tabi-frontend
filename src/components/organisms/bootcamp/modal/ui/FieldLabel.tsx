import { C } from "../shared";

export function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="block text-xs font-semibold mb-1.5"
      style={{ color: C.body }}
    >
      {children}
    </label>
  );
}
