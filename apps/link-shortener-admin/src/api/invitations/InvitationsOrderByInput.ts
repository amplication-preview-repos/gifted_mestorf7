import { SortOrder } from "../../util/SortOrder";

export type InvitationsOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  invitationCode?: SortOrder;
  invitedBy?: SortOrder;
  invitedUser?: SortOrder;
  updatedAt?: SortOrder;
};
