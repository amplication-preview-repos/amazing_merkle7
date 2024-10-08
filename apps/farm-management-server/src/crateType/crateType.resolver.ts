import * as graphql from "@nestjs/graphql";
import { CrateTypeResolverBase } from "./base/crateType.resolver.base";
import { CrateType } from "./base/CrateType";
import { CrateTypeService } from "./crateType.service";

@graphql.Resolver(() => CrateType)
export class CrateTypeResolver extends CrateTypeResolverBase {
  constructor(protected readonly service: CrateTypeService) {
    super(service);
  }
}
