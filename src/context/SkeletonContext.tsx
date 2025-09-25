import React, { createContext, CSSProperties, useContext } from "react";
import { SkeletonConfig, defaultValues } from "./skeleton-config";

const SkeletonContext = createContext<SkeletonConfig>(defaultValues);

export const SkeletonProvider = ({
  children,
  value,
  style,
}: {
  children: React.ReactNode;
  value?: Partial<SkeletonConfig>;
  style?: CSSProperties;
}) => {
  return (
    <SkeletonContext.Provider value={{ ...defaultValues, ...value, style }}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const useSkeleton = () => useContext(SkeletonContext);
