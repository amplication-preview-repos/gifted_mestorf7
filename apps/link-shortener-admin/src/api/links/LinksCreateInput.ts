import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";
import { QrCodesCreateNestedManyWithoutLinksItemsInput } from "./QrCodesCreateNestedManyWithoutLinksItemsInput";

export type LinksCreateInput = {
  originalUrl?: string | null;
  project?: ProjectsWhereUniqueInput | null;
  qrCodesItems?: QrCodesCreateNestedManyWithoutLinksItemsInput;
  shortenedUrl?: string | null;
};
