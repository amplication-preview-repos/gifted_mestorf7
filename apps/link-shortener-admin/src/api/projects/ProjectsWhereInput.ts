import { StringFilter } from "../../util/StringFilter";
import { LinksListRelationFilter } from "../links/LinksListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectsWhereInput = {
  id?: StringFilter;
  linksItems?: LinksListRelationFilter;
  projectName?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
