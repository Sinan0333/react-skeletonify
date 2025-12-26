import React, { CSSProperties } from "react";
import { SkeletonConfig } from "../context/skeleton-config";
import createStyle from "../utils/create-style";
import createConfig from "../utils/create-config";

export interface SkeletonLeafProps {
  loading: boolean;
  children: React.ReactNode;
  overrideConfig?: Partial<SkeletonConfig>;
  style?: CSSProperties;
}

const SkeletonLeaf: React.FC<SkeletonLeafProps> = (props) => {
  const { loading, children, overrideConfig, style } = props;
  const config = createConfig(overrideConfig, style);

  const skeletonStyle = createStyle(config);
  const className = `react-skeletonify ${config.className || ""}`;

  if (loading) {
    return (
      <div className={className} style={skeletonStyle}>
        <div style={{ opacity: 0 }}>{children}</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SkeletonLeaf;
