import { Module } from "@nestjs/common";
import { DeliveryRunModuleBase } from "./base/deliveryRun.module.base";
import { DeliveryRunService } from "./deliveryRun.service";
import { DeliveryRunController } from "./deliveryRun.controller";
import { DeliveryRunResolver } from "./deliveryRun.resolver";

@Module({
  imports: [DeliveryRunModuleBase],
  controllers: [DeliveryRunController],
  providers: [DeliveryRunService, DeliveryRunResolver],
  exports: [DeliveryRunService],
})
export class DeliveryRunModule {}
