import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LinksModuleBase } from "./base/links.module.base";
import { LinksService } from "./links.service";
import { LinksController } from "./links.controller";
import { LinksResolver } from "./links.resolver";

@Module({
  imports: [LinksModuleBase, forwardRef(() => AuthModule)],
  controllers: [LinksController],
  providers: [LinksService, LinksResolver],
  exports: [LinksService],
})
export class LinksModule {}
