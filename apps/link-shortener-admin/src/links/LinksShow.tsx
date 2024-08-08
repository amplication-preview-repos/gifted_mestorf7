import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LINKS_TITLE_FIELD } from "./LinksTitle";
import { PROJECTS_TITLE_FIELD } from "../projects/ProjectsTitle";

export const LinksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="originalUrl" source="originalUrl" />
        <ReferenceField
          label="project"
          source="projects.id"
          reference="Projects"
        >
          <TextField source={PROJECTS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="shortenedUrl" source="shortenedUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QrCodes"
          target="linkId"
          label="QRCodesItems"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
