export default function LegalBulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-[15px] text-[#555] leading-[1.8]"
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
