import React from "react";
import { SkeletonConfig } from "../context/skeleton-config";

export default (config: SkeletonConfig) => {
  const { animationSpeed, background, border, borderRadius } = config;

  const skeletonStyle: React.CSSProperties = {
    animation: `Rss-skeleton-loading ${animationSpeed}s linear infinite alternate`,
    backgroundColor: background,
    border,
    borderRadius,
  };
};
