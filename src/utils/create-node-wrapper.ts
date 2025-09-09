import React, { createElement } from "react";

export default function createNodeWrapper(node: React.ReactNode) {
  if (!node) return null;

  return createElement(
    "div",
    {
      className: (node?.props?.className || "") + " skeleton",
    },
    node
  );
}
