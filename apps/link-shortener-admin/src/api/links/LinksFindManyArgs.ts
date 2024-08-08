import { LinksWhereInput } from "./LinksWhereInput";
import { LinksOrderByInput } from "./LinksOrderByInput";

export type LinksFindManyArgs = {
  where?: LinksWhereInput;
  orderBy?: Array<LinksOrderByInput>;
  skip?: number;
  take?: number;
};
