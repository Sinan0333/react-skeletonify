import React, { createContext, CSSProperties, useContext } from "react";
import { SkeletonConfig, defaultValues } from "./skeleton-config";

const SkeletonContext = createContext<SkeletonConfig>(defaultValues);
interface SkeletonProviderProps {
  children: React.ReactNode;
  value?: Partial<SkeletonConfig>;
  style?: CSSProperties;
}

export const SkeletonProvider: React.FC<SkeletonProviderProps> = (props) => {
  const { children, value, style } = props;
  return (
    <SkeletonContext.Provider value={{ ...defaultValues, ...value, style }}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const useSkeleton = () => useContext(SkeletonContext);
