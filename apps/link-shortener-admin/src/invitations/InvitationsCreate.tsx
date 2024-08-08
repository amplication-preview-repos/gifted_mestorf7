import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InvitationsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="invitationCode" source="invitationCode" />
        <TextInput label="invitedBy" source="invitedBy" />
        <TextInput label="invitedUser" source="invitedUser" />
      </SimpleForm>
    </Create>
  );
};
