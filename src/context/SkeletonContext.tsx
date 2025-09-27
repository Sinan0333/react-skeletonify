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
  value?: Partial<SkeletonConfig>;
  style?: CSSProperties;
}

export const SkeletonProvider: React.FC<SkeletonProviderProps> = (props) => {
  const { children, value, style } = props;
  const { animation = defaultValues.animation, background } = value || {};

  const config: SkeletonConfig = useMemo(() => {
    return {
      ...defaultValues,
      ...value,
      background: background ? background : defaultBackground[animation],
      style: { ...defaultValues.style, ...value?.style, ...style },
    };
  }, [animation, background, value, style]);

  return (
    <SkeletonContext.Provider value={config}>
      {children}
    </SkeletonContext.Provider>
  );
};

export const useSkeleton = () => useContext(SkeletonContext);
