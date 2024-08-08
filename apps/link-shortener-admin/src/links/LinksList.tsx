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
import { PROJECTS_TITLE_FIELD } from "../projects/ProjectsTitle";

export const LinksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LinksItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
