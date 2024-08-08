import { Projects } from "../projects/Projects";
import { QrCodes } from "../qrCodes/QrCodes";

export type Links = {
  createdAt: Date;
  id: string;
  originalUrl: string | null;
  project?: Projects | null;
  qrCodesItems?: Array<QrCodes>;
  shortenedUrl: string | null;
  updatedAt: Date;
};
