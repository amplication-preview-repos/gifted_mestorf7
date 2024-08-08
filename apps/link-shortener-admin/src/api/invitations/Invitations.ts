export type Invitations = {
  createdAt: Date;
  email: string | null;
  id: string;
  invitationCode: string | null;
  invitedBy: string | null;
  invitedUser: string | null;
  updatedAt: Date;
};
