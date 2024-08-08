import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectsTitle } from "../projects/ProjectsTitle";
import { QrCodesTitle } from "../qrCodes/QrCodesTitle";

export const LinksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="originalUrl" source="originalUrl" />
        <ReferenceInput
          source="project.id"
          reference="Projects"
          label="project"
        >
          <SelectInput optionText={ProjectsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="qrCodesItems"
          reference="QrCodes"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QrCodesTitle} />
        </ReferenceArrayInput>
        <TextInput label="shortenedUrl" source="shortenedUrl" />
      </SimpleForm>
    </Edit>
  );
};
