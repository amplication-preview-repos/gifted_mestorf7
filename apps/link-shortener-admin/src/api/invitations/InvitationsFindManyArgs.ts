import { InvitationsWhereInput } from "./InvitationsWhereInput";
import { InvitationsOrderByInput } from "./InvitationsOrderByInput";

export type InvitationsFindManyArgs = {
  where?: InvitationsWhereInput;
  orderBy?: Array<InvitationsOrderByInput>;
  skip?: number;
  take?: number;
};
