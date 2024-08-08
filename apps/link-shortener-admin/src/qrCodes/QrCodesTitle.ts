import { QrCodes as TQrCodes } from "../api/qrCodes/QrCodes";

export const QRCODES_TITLE_FIELD = "id";

export const QrCodesTitle = (record: TQrCodes): string => {
  return record.id?.toString() || String(record.id);
};
