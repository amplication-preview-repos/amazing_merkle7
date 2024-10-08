import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrateTypeServiceBase } from "./base/crateType.service.base";

@Injectable()
export class CrateTypeService extends CrateTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
