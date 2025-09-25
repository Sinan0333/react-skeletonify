export const HTML_TAG_GROUPS = [
  "TEXT_TAGS",
  "STRUCTURE_TAGS",
  "METADATA_TAGS",
  "LIST_TAGS",
  "TABLE_TAGS",
  "FORM_TAGS",
  "MEDIA_TAGS",
  "INTERACTIVE_TAGS",
  "MISC_TAGS",
] as const;

export type HtmlTagGroup = (typeof HTML_TAG_GROUPS)[number];

export type SkeletonConfig = {
  animationSpeed: number;
  background: string;
  border: string;
  borderRadius: string | number;
  className?: string;
  animation: "animation-1" | "animation-2" | "animation-3";
  exceptTags: string[];
  exceptTagGroups: HtmlTagGroup[];
};

export const defaultValues: SkeletonConfig = {
  animationSpeed: 3,
  background: "#aeaeae no-repeat",
  border: "none",
  borderRadius: "8px",
  className: "",
  animation: "animation-1",
  exceptTags: [],
  exceptTagGroups: [],
};
