import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InvitationsWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  invitationCode?: StringNullableFilter;
  invitedBy?: StringNullableFilter;
  invitedUser?: StringNullableFilter;
};
