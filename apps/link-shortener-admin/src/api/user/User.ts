import { JsonValue } from "type-fest";
import { Projects } from "../projects/Projects";

export type User = {
  admin: boolean | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  permissions: JsonValue;
  projectsItems?: Array<Projects>;
  roles: JsonValue;
  superAdmin: boolean | null;
  updatedAt: Date;
  username: string;
};
