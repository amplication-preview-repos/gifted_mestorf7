import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LinksTitle } from "../links/LinksTitle";

export const QrCodesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="link.id" reference="Links" label="link">
          <SelectInput optionText={LinksTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
