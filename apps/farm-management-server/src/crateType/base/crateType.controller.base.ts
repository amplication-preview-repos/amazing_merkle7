/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CrateTypeService } from "../crateType.service";
import { CrateTypeCreateInput } from "./CrateTypeCreateInput";
import { CrateType } from "./CrateType";
import { CrateTypeFindManyArgs } from "./CrateTypeFindManyArgs";
import { CrateTypeWhereUniqueInput } from "./CrateTypeWhereUniqueInput";
import { CrateTypeUpdateInput } from "./CrateTypeUpdateInput";

export class CrateTypeControllerBase {
  constructor(protected readonly service: CrateTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CrateType })
  async createCrateType(
    @common.Body() data: CrateTypeCreateInput
  ): Promise<CrateType> {
    return await this.service.createCrateType({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CrateType] })
  @ApiNestedQuery(CrateTypeFindManyArgs)
  async crateTypes(@common.Req() request: Request): Promise<CrateType[]> {
    const args = plainToClass(CrateTypeFindManyArgs, request.query);
    return this.service.crateTypes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CrateType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async crateType(
    @common.Param() params: CrateTypeWhereUniqueInput
  ): Promise<CrateType | null> {
    const result = await this.service.crateType({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CrateType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCrateType(
    @common.Param() params: CrateTypeWhereUniqueInput,
    @common.Body() data: CrateTypeUpdateInput
  ): Promise<CrateType | null> {
    try {
      return await this.service.updateCrateType({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CrateType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCrateType(
    @common.Param() params: CrateTypeWhereUniqueInput
  ): Promise<CrateType | null> {
    try {
      return await this.service.deleteCrateType({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}