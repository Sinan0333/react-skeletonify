import { CSSProperties, useMemo } from "react";
import { SkeletonConfig } from "../context/skeleton-config";
import { useSkeleton } from "../context/SkeletonContext";

export default (
  overrideConfig?: Partial<SkeletonConfig>,
  style?: CSSProperties
) => {
  const mainConfig = useSkeleton();

  const config: SkeletonConfig = useMemo(
    () => ({
      ...mainConfig,
      ...overrideConfig,
      style: { ...mainConfig.style, ...overrideConfig?.style, ...style },
    }),
    [overrideConfig, mainConfig]
  );

  return config;
};
