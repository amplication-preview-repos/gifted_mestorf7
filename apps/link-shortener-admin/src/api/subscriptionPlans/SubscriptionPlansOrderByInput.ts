import { SortOrder } from "../../util/SortOrder";

export type SubscriptionPlansOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  linksLimit?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  projectsLimit?: SortOrder;
  updatedAt?: SortOrder;
};
