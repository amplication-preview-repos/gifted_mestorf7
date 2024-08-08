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

import { PROJECTS_TITLE_FIELD } from "./ProjectsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProjectsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="projectName" source="projectName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Links"
          target="projectId"
          label="LinksItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
