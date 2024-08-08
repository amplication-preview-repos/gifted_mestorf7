import { Links as TLinks } from "../api/links/Links";

export const LINKS_TITLE_FIELD = "originalUrl";

export const LinksTitle = (record: TLinks): string => {
  return record.originalUrl?.toString() || String(record.id);
};
