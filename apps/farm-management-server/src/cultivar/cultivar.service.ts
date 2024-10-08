import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CultivarServiceBase } from "./base/cultivar.service.base";

@Injectable()
export class CultivarService extends CultivarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
