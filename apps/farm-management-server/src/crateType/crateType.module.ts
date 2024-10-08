import { Module } from "@nestjs/common";
import { CrateTypeModuleBase } from "./base/crateType.module.base";
import { CrateTypeService } from "./crateType.service";
import { CrateTypeController } from "./crateType.controller";
import { CrateTypeResolver } from "./crateType.resolver";

@Module({
  imports: [CrateTypeModuleBase],
  controllers: [CrateTypeController],
  providers: [CrateTypeService, CrateTypeResolver],
  exports: [CrateTypeService],
})
export class CrateTypeModule {}
