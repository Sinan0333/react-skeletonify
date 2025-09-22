import React from "react";

export default function createLeafNode(
  node: React.ReactElement<any>,
  className: string = ""
): React.ReactElement {
  return React.cloneElement(node, {
    ...node.props,
    className: (node.props.className || "") + " Rss-skeleton " + className,
  } as typeof node.props);
}
