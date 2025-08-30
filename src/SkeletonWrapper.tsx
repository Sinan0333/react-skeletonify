// src/SkeletonWrapper.tsx
import React from "react";
import SkeletonElement from "./SkeletonElement";

interface SkeletonWrapperProps {
  loading: boolean;
  children: React.ReactNode;
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
