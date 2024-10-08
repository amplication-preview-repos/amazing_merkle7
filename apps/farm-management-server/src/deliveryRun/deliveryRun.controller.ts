import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryRunService } from "./deliveryRun.service";
import { DeliveryRunControllerBase } from "./base/deliveryRun.controller.base";

@swagger.ApiTags("deliveryRuns")
@common.Controller("deliveryRuns")
export class DeliveryRunController extends DeliveryRunControllerBase {
  constructor(protected readonly service: DeliveryRunService) {
    super(service);
  }
}
