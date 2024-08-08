import { Links } from "../links/Links";
import { User } from "../user/User";

export type Projects = {
  createdAt: Date;
  id: string;
  linksItems?: Array<Links>;
  projectName: string | null;
  updatedAt: Date;
  user?: User | null;
};
