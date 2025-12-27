import React from "react";

interface SkeletonKeepProps {
  children: React.ReactNode;
}

const SkeletonKeep: React.FC<SkeletonKeepProps> = ({ children }) => {
  return <>{children}</>;
};

export default SkeletonKeep;
