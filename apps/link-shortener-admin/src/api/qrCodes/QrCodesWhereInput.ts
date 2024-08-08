import { StringFilter } from "../../util/StringFilter";
import { LinksWhereUniqueInput } from "../links/LinksWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type QrCodesWhereInput = {
  id?: StringFilter;
  link?: LinksWhereUniqueInput;
  qrCodeImage?: JsonFilter;
};
