import React, { CSSProperties } from "react";
import SkeletonElement from "./SkeletonElement";
import { SkeletonConfig } from "../context/skeleton-config";
import createConfig from "../utils/create-config";

interface SkeletonWrapperProps {
  loading: boolean;
  children: React.ReactNode;
  overrideConfig?: Partial<SkeletonConfig>;
  style?: CSSProperties;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = (props) => {
  const { loading, children, overrideConfig, style } = props;
  const config = createConfig(overrideConfig, style);

  if (loading) {
    return <SkeletonElement config={config}>{children}</SkeletonElement>;
  }
  return children;
};

export default SkeletonWrapper;
