import React from "react";

interface SkeletonUniteProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SkeletonUnite: React.FC<SkeletonUniteProps> = (props) => {
  const { children, className, style } = props;

  if (className && className.includes("react-skeletonify")) {
    return (
      <div className={className} style={style}>
        <div style={{ opacity: 0 }}>{children}</div>
      </div>
    );
  }

  return children;
};

export default SkeletonUnite;
