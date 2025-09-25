import React, { createElement } from "react";

export default function createNodeWrapper(
  node: React.ReactElement<any>,
  className: string = ""
) {
  if (!node) return null;

  return createElement(
    "div",
    {
      className: (node?.props?.className || "") + className,
    },
    node
  );
}
