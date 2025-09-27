import React, {
  createContext,
  CSSProperties,
  useContext,
  useMemo,
} from "react";
import {
  SkeletonConfig,
  defaultBackground,
  defaultValues,
} from "./skeleton-config";

const SkeletonContext = createContext<SkeletonConfig>(defaultValues);
interface SkeletonProviderProps {
  children: React.ReactNode;
  config?: Partial<SkeletonConfig>;
  style?: CSSProperties;
}

export const SkeletonProvider: React.FC<SkeletonProviderProps> = (props) => {
  const { children, config, style } = props;
  const { animation = defaultValues.animation, background } = config || {};

  const value: SkeletonConfig = useMemo(
    () => ({
      ...defaultValues,
      ...config,
      background: background ? background : defaultBackground[animation],
      style: { ...defaultValues.style, ...config?.style, ...style },
    }),
    [animation, background, config, style]
  );

  console.log(value);

  return (
    <SkeletonContext.Provider value={value}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const useSkeleton = () => useContext(SkeletonContext);
