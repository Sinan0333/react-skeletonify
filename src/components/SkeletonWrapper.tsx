import React from "react";
import SkeletonElement from "./SkeletonElement";
import { SkeletonConfig } from "../context/skeleton-config";

interface SkeletonWrapperProps {
  loading: boolean;
  children: React.ReactNode;
  config?: Partial<SkeletonConfig>;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  loading,
  children,
}) => {
  if (loading) {
    return <SkeletonElement>{children}</SkeletonElement>;
  }
  return <>{children}</>;
};

export default SkeletonWrapper;
