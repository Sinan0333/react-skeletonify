import React from "react";

type CreateLeafNodeProps = {
  node: React.ReactElement<any>; // must be a ReactElement, not ReactNode
  className?: string;
};

export default function createLeafNode({
  node,
  className = "skeleton",
}: CreateLeafNodeProps): React.ReactElement {
  return React.cloneElement(node, {
    ...node.props,
    className: (node.props.className || "") + " " + className,
  } as typeof node.props);
}
