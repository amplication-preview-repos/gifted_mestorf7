import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvitationsService } from "./invitations.service";
import { InvitationsControllerBase } from "./base/invitations.controller.base";

@swagger.ApiTags("invitations")
@common.Controller("invitations")
export class InvitationsController extends InvitationsControllerBase {
  constructor(
    protected readonly service: InvitationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
