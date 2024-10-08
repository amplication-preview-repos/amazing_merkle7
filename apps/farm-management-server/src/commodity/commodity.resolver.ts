import * as graphql from "@nestjs/graphql";
import { CommodityResolverBase } from "./base/commodity.resolver.base";
import { Commodity } from "./base/Commodity";
import { CommodityService } from "./commodity.service";

@graphql.Resolver(() => Commodity)
export class CommodityResolver extends CommodityResolverBase {
  constructor(protected readonly service: CommodityService) {
    super(service);
  }
}
