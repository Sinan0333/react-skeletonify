import React, { CSSProperties, useMemo } from "react";
import SkeletonElement from "./SkeletonElement";
import { SkeletonConfig } from "../context/skeleton-config";
import { useSkeleton } from "../context/SkeletonContext";

interface SkeletonWrapperProps {
  loading: boolean;
  children: React.ReactNode;
  overrideConfig?: Partial<SkeletonConfig>;
  style?: CSSProperties;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = (props) => {
  const { loading, children, overrideConfig, style } = props;
  const mainConfig = useSkeleton();

  const config: SkeletonConfig = useMemo(
    () => ({
      ...mainConfig,
      ...overrideConfig,
      style: { ...mainConfig.style, ...overrideConfig?.style, ...style },
    }),
    [overrideConfig, mainConfig]
  );

  if (loading) {
    return <SkeletonElement config={config}>{children}</SkeletonElement>;
  }
  return children;
};

export default SkeletonWrapper;
