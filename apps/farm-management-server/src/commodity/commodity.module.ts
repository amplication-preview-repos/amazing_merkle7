import { Module } from "@nestjs/common";
import { CommodityModuleBase } from "./base/commodity.module.base";
import { CommodityService } from "./commodity.service";
import { CommodityController } from "./commodity.controller";
import { CommodityResolver } from "./commodity.resolver";

@Module({
  imports: [CommodityModuleBase],
  controllers: [CommodityController],
  providers: [CommodityService, CommodityResolver],
  exports: [CommodityService],
})
export class CommodityModule {}
