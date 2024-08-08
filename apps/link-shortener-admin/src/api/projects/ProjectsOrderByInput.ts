import { SortOrder } from "../../util/SortOrder";

export type ProjectsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectName?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
