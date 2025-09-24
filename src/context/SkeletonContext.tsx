import React, { createContext, useContext } from "react";
import { SkeletonConfig, defaultValues } from "./skeleton-config";

const SkeletonContext = createContext<SkeletonConfig>(defaultValues);

export const SkeletonProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: Partial<SkeletonConfig>;
}) => {
  return (
    <SkeletonContext.Provider value={{ ...defaultValues, ...value }}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const useSkeleton = () => useContext(SkeletonContext);
