import "./styles/skeleton.css";

export { default as SkeletonWrapper } from "./components/SkeletonWrapper";
export { default as SkeletonKeep } from "./components/SkeletonKeep";
export { default as SkeletonIgnore } from "./components/SkeletonIgnore";
export { SkeletonProvider, useSkeleton } from "./context/SkeletonContext";
export type { SkeletonConfig } from "./context/skeleton-config";
