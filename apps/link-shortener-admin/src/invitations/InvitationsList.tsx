import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InvitationsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InvitationsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="invitationCode" source="invitationCode" />
        <TextField label="invitedBy" source="invitedBy" />
        <TextField label="invitedUser" source="invitedUser" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
