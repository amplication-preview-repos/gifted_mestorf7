import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QrCodesService } from "./qrCodes.service";
import { QrCodesControllerBase } from "./base/qrCodes.controller.base";

@swagger.ApiTags("qrCodes")
@common.Controller("qrCodes")
export class QrCodesController extends QrCodesControllerBase {
  constructor(
    protected readonly service: QrCodesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
