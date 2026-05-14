import { C } from "../shared";

export function FieldLabel({
  children,
  optional
}: {
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      className="block text-xs font-semibold mb-1.5"
      style={{ color: C.body }}
    >
      {children}
      {optional ? (
        <span className="font-normal ml-1" style={{ color: C.subtle }}>
          (optional)
        </span>
      ) : (
        <span style={{ color: C.brandLt }}> *</span>
      )}
    </label>
  );
}
