import { SortOrder } from "../../util/SortOrder";

export type LinksOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  originalUrl?: SortOrder;
  projectId?: SortOrder;
  shortenedUrl?: SortOrder;
  updatedAt?: SortOrder;
};
