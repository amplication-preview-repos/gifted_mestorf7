import { LinksWhereUniqueInput } from "../links/LinksWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type QrCodesUpdateInput = {
  link?: LinksWhereUniqueInput | null;
  qrCodeImage?: InputJsonValue;
};
