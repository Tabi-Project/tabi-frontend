export default function LegalContactBlock({ lines }: { lines: string[] }) {
  return (
    <div className="mt-2 rounded-xl border border-[#ede8f5] bg-[#fdf7ff] px-6 py-5 space-y-1">
      {lines.map((line, i) => {
        if (line.startsWith("Email:")) {
          const email = line.replace("Email: ", "");
          return (
            <p key={i} className="text-[15px] text-[#555]">
              <span className="font-semibold text-[#121212]">Email: </span>
              <a
                href={`mailto:${email}`}
                className="text-brand-primary hover:underline"
              >
                {email}
              </a>
            </p>
          );
        }
        if (line.startsWith("Website:")) {
          const url = line.replace("Website: ", "");
          return (
            <p key={i} className="text-[15px] text-[#555]">
              <span className="font-semibold text-[#121212]">Website: </span>
              <a
                href={`https://${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                {url}
              </a>
            </p>
          );
        }
        return (
          <p key={i} className="text-[15px] font-semibold text-[#121212]">
            {line}
          </p>
        );
      })}
    </div>
  );
}
