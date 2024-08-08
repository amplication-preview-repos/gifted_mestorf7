import { Invitations as TInvitations } from "../api/invitations/Invitations";

export const INVITATIONS_TITLE_FIELD = "invitationCode";

export const InvitationsTitle = (record: TInvitations): string => {
  return record.invitationCode?.toString() || String(record.id);
};
