export type SkeletonConfig = {
  animationSpeed?: number;
  background?: string;
  border?: string;
  borderRadius?: string | number;
  mode?: "light" | "dark";
  className?: string;
  style?: "default" | "custom";
  exceptTags?: string[];
  exceptTagGroups?: string[];
};

export const defaultValues: SkeletonConfig = {
  animationSpeed: 1,
  background: "hsl(200, 20%, 90%)",
  border: "none",
  borderRadius: "8px",
  mode: "light",
  className: "",
  style: "default",
  exceptTags: [],
  exceptTagGroups: [],
};
