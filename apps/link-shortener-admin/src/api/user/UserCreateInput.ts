import { InputJsonValue } from "../../types";
import { ProjectsCreateNestedManyWithoutUsersInput } from "./ProjectsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  admin?: boolean | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  permissions?: InputJsonValue;
  projectsItems?: ProjectsCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  superAdmin?: boolean | null;
  username: string;
};
