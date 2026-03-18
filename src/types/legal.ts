export type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type BulletsBlock = {
  type: "bullets";
  items: string[];
};

export type SubsectionBlock = {
  type: "subsection";
  number: string;
  title: string;
  text?: string;
  bullets?: string[];
};

export type ContactBlock = {
  type: "contact";
  lines: string[];
};

export type ContentBlock =
  | ParagraphBlock
  | BulletsBlock
  | SubsectionBlock
  | ContactBlock;

export type LegalSection = {
  number: string;
  title: string;
  content: ContentBlock[];
};
