import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LINKS_TITLE_FIELD } from "../links/LinksTitle";

export const QrCodesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QRCodesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="link" source="links.id" reference="Links">
          <TextField source={LINKS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="qrCodeImage" source="qrCodeImage" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
