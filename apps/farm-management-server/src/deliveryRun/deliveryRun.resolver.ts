import * as graphql from "@nestjs/graphql";
import { DeliveryRunResolverBase } from "./base/deliveryRun.resolver.base";
import { DeliveryRun } from "./base/DeliveryRun";
import { DeliveryRunService } from "./deliveryRun.service";

@graphql.Resolver(() => DeliveryRun)
export class DeliveryRunResolver extends DeliveryRunResolverBase {
  constructor(protected readonly service: DeliveryRunService) {
    super(service);
  }
}
