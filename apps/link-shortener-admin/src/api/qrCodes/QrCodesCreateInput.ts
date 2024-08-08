import { LinksWhereUniqueInput } from "../links/LinksWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type QrCodesCreateInput = {
  link?: LinksWhereUniqueInput | null;
  qrCodeImage?: InputJsonValue;
};
