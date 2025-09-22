import React from "react";
import createNodeWrapper from "../utils/create-node-wrapper";
import { TEXT_TAGS } from "../constants/tags";
import createLeafNode from "../utils/create-leaf-node";

function useAddSkelton() {
  const addSkeleton = (node: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(node)) return createNodeWrapper(node as any);

    const element = node as React.ReactElement<any>;
    const { children } = element.props;
    const elementType = element.type;

    const hasChildren = React.Children.count(children) > 0;
    const isValidChildren = typeof children !== "string";

    if (typeof elementType === "function") {
      const rendered = (elementType as any)(element.props);
      return addSkeleton(rendered);
    }

    if (TEXT_TAGS.includes(elementType)) {
      return createLeafNode(node, "Rss-skeleton-text");
    }

    if (elementType === "img") {
      return createNodeWrapper(element);
    }

    if (hasChildren && isValidChildren) {
      const childWithSkeletons = React.Children.map(children, addSkeleton);

      return React.cloneElement(element, {
        ...element.props,
        children: childWithSkeletons,
      } as typeof element.props);
    }

    return createLeafNode(element);
  };

  return addSkeleton;
}

export default useAddSkelton;
