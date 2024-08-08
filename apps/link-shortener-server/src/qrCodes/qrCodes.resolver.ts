import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QrCodesResolverBase } from "./base/qrCodes.resolver.base";
import { QrCodes } from "./base/QrCodes";
import { QrCodesService } from "./qrCodes.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QrCodes)
export class QrCodesResolver extends QrCodesResolverBase {
  constructor(
    protected readonly service: QrCodesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
