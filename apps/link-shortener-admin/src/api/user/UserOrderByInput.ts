import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  admin?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  permissions?: SortOrder;
  roles?: SortOrder;
  superAdmin?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
