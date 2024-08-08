import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LinksServiceBase } from "./base/links.service.base";

@Injectable()
export class LinksService extends LinksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
