import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrateTypeService } from "./crateType.service";
import { CrateTypeControllerBase } from "./base/crateType.controller.base";

@swagger.ApiTags("crateTypes")
@common.Controller("crateTypes")
export class CrateTypeController extends CrateTypeControllerBase {
  constructor(protected readonly service: CrateTypeService) {
    super(service);
  }
}
