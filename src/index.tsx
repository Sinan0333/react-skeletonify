// Styles
import "./styles/skeleton.css";

// All Components
export { default as SkeletonWrapper } from "./components/SkeletonWrapper";
export { default as SkeletonLeaf } from "./components/SkeletonLeaf";
export { default as SkeletonKeep } from "./components/SkeletonKeep";
export { default as SkeletonIgnore } from "./components/SkeletonIgnore";
export { default as SkeletonUnite } from "./components/SkeletonUnite";

// Context
export { SkeletonProvider, useSkeleton } from "./context/SkeletonContext";

// Types
export type { SkeletonConfig } from "./context/skeleton-config";
