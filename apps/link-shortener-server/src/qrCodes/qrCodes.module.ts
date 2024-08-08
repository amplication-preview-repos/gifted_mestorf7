import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QrCodesModuleBase } from "./base/qrCodes.module.base";
import { QrCodesService } from "./qrCodes.service";
import { QrCodesController } from "./qrCodes.controller";
import { QrCodesResolver } from "./qrCodes.resolver";

@Module({
  imports: [QrCodesModuleBase, forwardRef(() => AuthModule)],
  controllers: [QrCodesController],
  providers: [QrCodesService, QrCodesResolver],
  exports: [QrCodesService],
})
export class QrCodesModule {}
