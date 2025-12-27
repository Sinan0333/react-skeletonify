import React from "react";
import { LIST_TAGS, TEXT_TAGS } from "../constants/tags";

import SkeletonIgnore from "../components/SkeletonIgnore";
import SkeletonKeep from "../components/SkeletonKeep";
import SkeletonUnite from "../components/SkeletonUnite";

export const isTextElement = (elementType: string): boolean => {
  return TEXT_TAGS.includes(elementType) || LIST_TAGS.includes(elementType);
};

export const isSkeletonIgnoreComponent = (
  element: React.ComponentType<any> | string
): boolean => element === SkeletonIgnore;

export const isSkeletonKeepComponent = (
  element: React.ComponentType<any> | string
): boolean => element === SkeletonKeep;

export const isSkeletonUniteComponent = (
  element: React.ComponentType<any> | string
): boolean => element === SkeletonUnite;
