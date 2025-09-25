import React, { createElement, CSSProperties } from "react";

export default function createNodeWrapper(
  node: React.ReactElement<any>,
  className: string,
  style: CSSProperties
) {
  if (!node) return null;

  return createElement(
    "div",
    {
      className: className + (node?.props?.className || ""),
      style: {
        ...node?.props?.style,
        ...style,
      },
    },
    node
  );
}
