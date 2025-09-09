import React from "react";
import createNodeWrapper from "../utils/create-node-wrapper";
import { TEXT_TAGS } from "../constants/tags";
import createLeafNode from "../utils/create-leaf-node";

function useAddSkelton() {
  const addSkeleton = (node: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(node)) return createNodeWrapper(node);

    const hasChildren = React.Children.count(node.props.children) > 0;
    const isValidChildren = typeof node.props.children !== "string";
    const nodeType = typeof node.type;

    if (nodeType === "function") {
      return addSkeleton(node.type(node.props));
    }
    if (TEXT_TAGS.includes(node.type)) {
      return createLeafNode({ node, className: "skeleton skeleton-text" });
    }
    if (node.type === "img") {
      return createNodeWrapper(node);
    }

    if (hasChildren && isValidChildren) {
      const childWithSkeletons = React.Children.map(
        node.props.children,
        addSkeleton
      );

      return React.cloneElement(node, {
        ...node.props,
        children: childWithSkeletons,
      });
    } else {
      createLeafNode({ node });
    }
  };

  return addSkeleton;
}

export default useAddSkelton;
