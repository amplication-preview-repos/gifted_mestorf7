import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InvitationsModuleBase } from "./base/invitations.module.base";
import { InvitationsService } from "./invitations.service";
import { InvitationsController } from "./invitations.controller";
import { InvitationsResolver } from "./invitations.resolver";

@Module({
  imports: [InvitationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [InvitationsController],
  providers: [InvitationsService, InvitationsResolver],
  exports: [InvitationsService],
})
export class InvitationsModule {}
