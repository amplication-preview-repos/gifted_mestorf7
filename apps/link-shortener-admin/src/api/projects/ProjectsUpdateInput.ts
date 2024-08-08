import { LinksUpdateManyWithoutProjectsItemsInput } from "./LinksUpdateManyWithoutProjectsItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectsUpdateInput = {
  linksItems?: LinksUpdateManyWithoutProjectsItemsInput;
  projectName?: string | null;
  user?: UserWhereUniqueInput | null;
};
