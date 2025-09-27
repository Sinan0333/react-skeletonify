import { CSSProperties } from "react";

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

export const defaultBackground = {
  "animation-1": "#aeaeae",
  "animation-2": "#e5e5e5",
  "animation-3": "hsl(210, 20%, 90%)",
};

export type SkeletonConfig = {
  animationSpeed: number;
  background: string;
  border: string;
  borderRadius: string | number;
  textTagsMargin: string;
  className?: string;
  style?: CSSProperties;
  animation: "animation-1" | "animation-2";
  exceptTags: string[];
  exceptTagGroups: HtmlTagGroup[];
};

export const defaultValues: SkeletonConfig = {
  animationSpeed: 3,
  background: "#aeaeae",
  border: "none",
  borderRadius: "0",
  textTagsMargin: "0",
  className: "",
  style: {},
  animation: "animation-1",
  exceptTags: [],
  exceptTagGroups: [],
};
