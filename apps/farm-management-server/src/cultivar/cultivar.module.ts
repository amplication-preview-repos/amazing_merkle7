import { Module } from "@nestjs/common";
import { CultivarModuleBase } from "./base/cultivar.module.base";
import { CultivarService } from "./cultivar.service";
import { CultivarController } from "./cultivar.controller";
import { CultivarResolver } from "./cultivar.resolver";

@Module({
  imports: [CultivarModuleBase],
  controllers: [CultivarController],
  providers: [CultivarService, CultivarResolver],
  exports: [CultivarService],
})
export class CultivarModule {}
