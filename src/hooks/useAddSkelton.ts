import React from "react";
import createNodeWrapper from "../utils/create-node-wrapper";
import { TEXT_TAGS } from "../constants/tags";
import createLeafNode from "../utils/create-leaf-node";
import { SkeletonConfig } from "../context/skeleton-config";
import createStyle from "../utils/create-style";
import checkTagInGroup from "../utils/check-tag-in-group";

function useAddSkelton(config: SkeletonConfig) {
  const { className, exceptTags, exceptTagGroups } = config;
  const CLASS_NAME = `react-skeletonify ${className} `;
  const style = createStyle(config);

  const addSkeleton = (node: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(node))
      return createNodeWrapper(node as any, CLASS_NAME, style);

    const element = node as React.ReactElement<any>;
    const { children } = element.props;
    const elementType = element.type;

    if (typeof elementType === "string") {
      if (exceptTags.includes(elementType)) {
        return element;
      }
      const isRestrictedGroupTag = checkTagInGroup(
        elementType,
        exceptTagGroups
      );

      if (isRestrictedGroupTag) return element;
    }

    const hasChildren = React.Children.count(children) > 0;
    const isValidChildren = typeof children !== "string";

    if (typeof elementType === "function") {
      const rendered = (elementType as any)(element.props);
      return addSkeleton(rendered);
    }

    if (TEXT_TAGS.includes(elementType) && !isValidChildren) {
      return createLeafNode(element, CLASS_NAME + "react-skeletonify-text", style);
    }

    if (elementType === "img") {
      return createNodeWrapper(element, CLASS_NAME, style);
    }

    if (hasChildren && isValidChildren) {
      const childWithSkeletons = React.Children.map(children, addSkeleton);

      return React.cloneElement(element, {
        ...element.props,
        children: childWithSkeletons,
      } as typeof element.props);
    }

    return createLeafNode(element, CLASS_NAME, style);
  };

  return addSkeleton;
}

export default useAddSkelton;
