import React, { useMemo } from "react";
import SkeletonElement from "./SkeletonElement";
import { SkeletonConfig } from "../context/skeleton-config";
import { useSkeleton } from "../context/SkeletonContext";

interface SkeletonWrapperProps {
  loading: boolean;
  children: React.ReactNode;
  config?: Partial<SkeletonConfig>;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = (props) => {
  const { loading, children, config } = props;
  const mainConfig = useSkeleton();

  const mergedConfig: SkeletonConfig = useMemo(
    () => ({ ...mainConfig, ...config }),
    [config, mainConfig]
  );

  if (loading) {
    return <SkeletonElement config={mergedConfig}>{children}</SkeletonElement>;
  }
  return <>{children}</>;
};

export default SkeletonWrapper;
