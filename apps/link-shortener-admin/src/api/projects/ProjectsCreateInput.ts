import { LinksCreateNestedManyWithoutProjectsItemsInput } from "./LinksCreateNestedManyWithoutProjectsItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectsCreateInput = {
  linksItems?: LinksCreateNestedManyWithoutProjectsItemsInput;
  projectName?: string | null;
  user?: UserWhereUniqueInput | null;
};
