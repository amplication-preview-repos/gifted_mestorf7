import { InputJsonValue } from "../../types";
import { ProjectsUpdateManyWithoutUsersInput } from "./ProjectsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  admin?: boolean | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  permissions?: InputJsonValue;
  projectsItems?: ProjectsUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  superAdmin?: boolean | null;
  username?: string;
};
