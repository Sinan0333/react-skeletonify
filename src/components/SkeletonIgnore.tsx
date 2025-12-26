import React from "react";

interface SkeletonIgnoreProps {
  children: React.ReactNode;
}

const SkeletonIgnore: React.FC<SkeletonIgnoreProps> = ({ children }) => {
  return <>{children}</>;
};

export default SkeletonIgnore;
