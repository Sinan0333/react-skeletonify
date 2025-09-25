import { CSSProperties } from "react";
import { SkeletonConfig } from "../context/skeleton-config";

const getAnimation = (
  animation: string,
  animationSpeed: number,
  background: string
) => {
  switch (animation) {
    case "animation-1":
      return {
        animation: `react-skeletonify-animation-1 ${animationSpeed}s ease-in-out infinite `,
        background: background,
        animationDelay: "0.5s",
      };
    case "animation-2":
      return {
        animation: `react-skeletonify-animation-2 ${animationSpeed}s infinite`,
        backgroundImage: background,
      };
    case "animation-3":
      return {
        animation: `react-skeletonify-animation-3 ${animationSpeed}s linear infinite alternate`,
        backgroundColor: background,
      };
  }
};

export default (config: SkeletonConfig) => {
  const { animationSpeed, background, border, borderRadius, animation, style } =
    config;

  const skeletonAnimation: CSSProperties = {
    ...getAnimation(animation, animationSpeed, background),
    border,
    borderRadius,
    ...style,
  };

  return skeletonAnimation;
};
