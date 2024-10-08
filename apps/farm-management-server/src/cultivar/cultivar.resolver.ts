import * as graphql from "@nestjs/graphql";
import { CultivarResolverBase } from "./base/cultivar.resolver.base";
import { Cultivar } from "./base/Cultivar";
import { CultivarService } from "./cultivar.service";

@graphql.Resolver(() => Cultivar)
export class CultivarResolver extends CultivarResolverBase {
  constructor(protected readonly service: CultivarService) {
    super(service);
  }
}
