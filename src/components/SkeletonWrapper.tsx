import React, { CSSProperties, useMemo } from "react";
import SkeletonElement from "./SkeletonElement";
import {
  defaultBackground,
  defaultValues,
  SkeletonConfig,
} from "../context/skeleton-config";
import { useSkeleton } from "../context/SkeletonContext";

interface SkeletonWrapperProps {
  loading: boolean;
  children: React.ReactNode;
  overrideConfig?: Partial<SkeletonConfig>;
  style?: CSSProperties;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = (props) => {
  const { loading, children, overrideConfig, style } = props;
  const { animation = defaultValues.animation, background } =
    overrideConfig || {};
  const mainConfig = useSkeleton();

  const config: SkeletonConfig = useMemo(
    () => ({
      ...mainConfig,
      ...overrideConfig,
      background: background ? background : defaultBackground[animation],
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
