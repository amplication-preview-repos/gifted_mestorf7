import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectsListRelationFilter } from "../projects/ProjectsListRelationFilter";

export type UserWhereInput = {
  admin?: BooleanNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  permissions?: JsonFilter;
  projectsItems?: ProjectsListRelationFilter;
  superAdmin?: BooleanNullableFilter;
  username?: StringFilter;
};
