import React from "react";
import useAddSkelton from "../hooks/useAddSkelton";

const SkeletonElement: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const addSkeleton = useAddSkelton();
  return (
    <div className="skeleton-container">
      {React.Children.map(children, (child) => addSkeleton(child))}
    </div>
  );
};

export default SkeletonElement;
