import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommodityServiceBase } from "./base/commodity.service.base";

@Injectable()
export class CommodityService extends CommodityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
