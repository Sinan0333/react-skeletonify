import React from "react";

function useAddSkelton() {
  const addSkeleton = (node: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(node)) return node;

    const hasChildren = React.Children.count(node.props.children) > 0;
    const isValidChildren = typeof node.props.children !== "string";

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
      return React.cloneElement(node, {
        ...node.props,
        className: (node.props.className || "") + " skeleton",
      });
    }
  };

  return addSkeleton;
}

export default useAddSkelton;
