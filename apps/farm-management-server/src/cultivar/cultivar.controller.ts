import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CultivarService } from "./cultivar.service";
import { CultivarControllerBase } from "./base/cultivar.controller.base";

@swagger.ApiTags("cultivars")
@common.Controller("cultivars")
export class CultivarController extends CultivarControllerBase {
  constructor(protected readonly service: CultivarService) {
    super(service);
  }
}
