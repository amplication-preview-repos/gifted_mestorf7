import { Links } from "../links/Links";
import { JsonValue } from "type-fest";

export type QrCodes = {
  createdAt: Date;
  id: string;
  link?: Links | null;
  qrCodeImage: JsonValue;
  updatedAt: Date;
};
