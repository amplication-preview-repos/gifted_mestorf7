import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";
import { QrCodesListRelationFilter } from "../qrCodes/QrCodesListRelationFilter";

export type LinksWhereInput = {
  id?: StringFilter;
  originalUrl?: StringNullableFilter;
  project?: ProjectsWhereUniqueInput;
  qrCodesItems?: QrCodesListRelationFilter;
  shortenedUrl?: StringNullableFilter;
};
