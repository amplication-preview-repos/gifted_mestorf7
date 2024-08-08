import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LinksTitle } from "../links/LinksTitle";

export const QrCodesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="link.id" reference="Links" label="link">
          <SelectInput optionText={LinksTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
