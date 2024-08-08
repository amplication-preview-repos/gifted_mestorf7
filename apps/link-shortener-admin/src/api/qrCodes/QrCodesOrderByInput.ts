import { SortOrder } from "../../util/SortOrder";

export type QrCodesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  linkId?: SortOrder;
  qrCodeImage?: SortOrder;
  updatedAt?: SortOrder;
};
