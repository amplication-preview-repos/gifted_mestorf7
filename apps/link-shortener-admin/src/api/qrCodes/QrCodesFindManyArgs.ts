import { QrCodesWhereInput } from "./QrCodesWhereInput";
import { QrCodesOrderByInput } from "./QrCodesOrderByInput";

export type QrCodesFindManyArgs = {
  where?: QrCodesWhereInput;
  orderBy?: Array<QrCodesOrderByInput>;
  skip?: number;
  take?: number;
};
