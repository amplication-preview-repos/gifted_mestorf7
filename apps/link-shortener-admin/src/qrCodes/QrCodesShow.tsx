import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LINKS_TITLE_FIELD } from "../links/LinksTitle";

export const QrCodesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="link" source="links.id" reference="Links">
          <TextField source={LINKS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="qrCodeImage" source="qrCodeImage" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
