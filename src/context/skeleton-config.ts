export type SkeletonConfig = {
  animationSpeed: number;
  background: string;
  border: string;
  borderRadius: string | number;
  className?: string;
  style: "animation-1" | "animation-2" | "animation-3";
  exceptTags: string[];
  exceptTagGroups: string[];
};

export const defaultValues: SkeletonConfig = {
  animationSpeed: 3,
  background: "#aeaeae no-repeat",
  border: "none",
  borderRadius: "8px",
  className: "",
  style: "animation-1",
  exceptTags: [],
  exceptTagGroups: [],
};
