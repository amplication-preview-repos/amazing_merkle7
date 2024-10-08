import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryRunServiceBase } from "./base/deliveryRun.service.base";

@Injectable()
export class DeliveryRunService extends DeliveryRunServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
