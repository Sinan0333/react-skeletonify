import React, { CSSProperties } from "react";

export default function createLeafNode(
  node: React.ReactElement<any>,
  className: string,
  style: CSSProperties
): React.ReactElement {
  return React.cloneElement(node, {
    ...node.props,
    className: className + (node.props.className || ""),
    style: {
      ...style,
      ...node.props.style,
    },
  } as typeof node.props);
}
