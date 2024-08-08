import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const InvitationsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="invitationCode" source="invitationCode" />
        <TextInput label="invitedBy" source="invitedBy" />
        <TextInput label="invitedUser" source="invitedUser" />
      </SimpleForm>
    </Edit>
  );
};
