import React from "react";
import useAddSkelton from "../hooks/useAddSkelton";
import { SkeletonConfig } from "../context/skeleton-config";

interface SkeletonElementProps {
  children: React.ReactNode;
  config: SkeletonConfig;
}

const SkeletonElement: React.FC<SkeletonElementProps> = (props) => {
  const { children, config } = props;
  const addSkeleton = useAddSkelton(config);

  return React.Children.map(children, (child) => addSkeleton(child));
};

export default SkeletonElement;
