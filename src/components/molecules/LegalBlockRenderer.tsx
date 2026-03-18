import { ContentBlock } from "@/types/legal";
import LegalParagraph from "@/components/atoms/LegalParagraph";
import LegalBulletList from "@/components/atoms/LegalBulletList";
import LegalContactBlock from "@/components/atoms/LegalContactBlock";
import LegalSubsection from "@/components/molecules/LegalSubsection";

export default function LegalBlockRenderer({
  block,
  idx
}: {
  block: ContentBlock;
  idx: number;
}) {
  switch (block.type) {
    case "paragraph":
      return <LegalParagraph key={idx} text={block.text} />;
    case "bullets":
      return <LegalBulletList key={idx} items={block.items} />;
    case "subsection":
      return (
        <LegalSubsection
          key={idx}
          number={block.number}
          title={block.title}
          text={block.text}
          bullets={block.bullets}
        />
      );
    case "contact":
      return <LegalContactBlock key={idx} lines={block.lines} />;
  }
}
