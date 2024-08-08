import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";
import { QrCodesUpdateManyWithoutLinksItemsInput } from "./QrCodesUpdateManyWithoutLinksItemsInput";

export type LinksUpdateInput = {
  originalUrl?: string | null;
  project?: ProjectsWhereUniqueInput | null;
  qrCodesItems?: QrCodesUpdateManyWithoutLinksItemsInput;
  shortenedUrl?: string | null;
};
