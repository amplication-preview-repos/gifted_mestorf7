import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LinksService } from "./links.service";
import { LinksControllerBase } from "./base/links.controller.base";

@swagger.ApiTags("links")
@common.Controller("links")
export class LinksController extends LinksControllerBase {
  constructor(
    protected readonly service: LinksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
