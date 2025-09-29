import {
  FORM_TAGS,
  INTERACTIVE_TAGS,
  LIST_TAGS,
  MEDIA_TAGS,
  METADATA_TAGS,
  MISC_TAGS,
  STRUCTURE_TAGS,
  TABLE_TAGS,
  TEXT_TAGS,
} from "../constants/tags";
import { HtmlTagGroup } from "../context/skeleton-config";

export default function checkTagInGroup(
  tag: string,
  groups: HtmlTagGroup[]
): boolean {
  return groups.some((group) => {
    switch (group) {
      case "TEXT_TAGS":
        return TEXT_TAGS.includes(tag);
      case "STRUCTURE_TAGS":
        return STRUCTURE_TAGS.includes(tag);
      case "METADATA_TAGS":
        return METADATA_TAGS.includes(tag);
      case "LIST_TAGS":
        return LIST_TAGS.includes(tag);
      case "TABLE_TAGS":
        return TABLE_TAGS.includes(tag);
      case "FORM_TAGS":
        return FORM_TAGS.includes(tag);
      case "MEDIA_TAGS":
        return MEDIA_TAGS.includes(tag);
      case "INTERACTIVE_TAGS":
        return INTERACTIVE_TAGS.includes(tag);
      case "MISC_TAGS":
        return MISC_TAGS.includes(tag);
    }
  });
}
