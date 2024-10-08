/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommodityWhereInput } from "./CommodityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CommodityOrderByInput } from "./CommodityOrderByInput";

@ArgsType()
class CommodityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CommodityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CommodityWhereInput, { nullable: true })
  @Type(() => CommodityWhereInput)
  where?: CommodityWhereInput;

  @ApiProperty({
    required: false,
    type: [CommodityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CommodityOrderByInput], { nullable: true })
  @Type(() => CommodityOrderByInput)
  orderBy?: Array<CommodityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CommodityFindManyArgs as CommodityFindManyArgs };