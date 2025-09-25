import React, { CSSProperties } from "react";

export default function createLeafNode(
  node: React.ReactElement<any>,
  className: string,
  style: CSSProperties
): React.ReactElement {
  return React.cloneElement(node, {
    ...node.props,
    className: (node.props.className || "") + className,
    style: {
      ...node.props.style,
      ...style,
    },
  } as typeof node.props);
}
