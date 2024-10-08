/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Cultivar as PrismaCultivar } from "@prisma/client";

export class CultivarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CultivarCountArgs, "select">): Promise<number> {
    return this.prisma.cultivar.count(args);
  }

  async cultivars(
    args: Prisma.CultivarFindManyArgs
  ): Promise<PrismaCultivar[]> {
    return this.prisma.cultivar.findMany(args);
  }
  async cultivar(
    args: Prisma.CultivarFindUniqueArgs
  ): Promise<PrismaCultivar | null> {
    return this.prisma.cultivar.findUnique(args);
  }
  async createCultivar(
    args: Prisma.CultivarCreateArgs
  ): Promise<PrismaCultivar> {
    return this.prisma.cultivar.create(args);
  }
  async updateCultivar(
    args: Prisma.CultivarUpdateArgs
  ): Promise<PrismaCultivar> {
    return this.prisma.cultivar.update(args);
  }
  async deleteCultivar(
    args: Prisma.CultivarDeleteArgs
  ): Promise<PrismaCultivar> {
    return this.prisma.cultivar.delete(args);
  }
}