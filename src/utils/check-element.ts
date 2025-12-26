import React from "react";
import { LIST_TAGS, TEXT_TAGS } from "../constants/tags";

import SkeletonIgnore from "../components/SkeletonIgnore";
import SkeletonKeep from "../components/SkeletonKeep";

export const isTextElement = (elementType: string): boolean => {
  return TEXT_TAGS.includes(elementType) || LIST_TAGS.includes(elementType);
};

export const isSkeletonIgnoreComponent = (
  element: React.ComponentType<any> | string
): boolean => {
  return element === SkeletonIgnore;
};

export const isSkeletonKeepComponent = (
  element: React.ComponentType<any> | string
): boolean => {
  return element === SkeletonKeep;
};
