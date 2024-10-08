import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommodityService } from "./commodity.service";
import { CommodityControllerBase } from "./base/commodity.controller.base";

@swagger.ApiTags("commodities")
@common.Controller("commodities")
export class CommodityController extends CommodityControllerBase {
  constructor(protected readonly service: CommodityService) {
    super(service);
  }
}
