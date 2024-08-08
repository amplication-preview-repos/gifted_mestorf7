import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvitationsServiceBase } from "./base/invitations.service.base";

@Injectable()
export class InvitationsService extends InvitationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
