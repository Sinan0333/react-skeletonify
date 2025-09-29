import { LIST_TAGS, TEXT_TAGS } from "../constants/tags";

export default (elementType: string) => {
  return TEXT_TAGS.includes(elementType) || LIST_TAGS.includes(elementType);
};
