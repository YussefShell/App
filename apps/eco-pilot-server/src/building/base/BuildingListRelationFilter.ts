/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BuildingWhereInput } from "./BuildingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BuildingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BuildingWhereInput,
  })
  @ValidateNested()
  @Type(() => BuildingWhereInput)
  @IsOptional()
  @Field(() => BuildingWhereInput, {
    nullable: true,
  })
  every?: BuildingWhereInput;

  @ApiProperty({
    required: false,
    type: () => BuildingWhereInput,
  })
  @ValidateNested()
  @Type(() => BuildingWhereInput)
  @IsOptional()
  @Field(() => BuildingWhereInput, {
    nullable: true,
  })
  some?: BuildingWhereInput;

  @ApiProperty({
    required: false,
    type: () => BuildingWhereInput,
  })
  @ValidateNested()
  @Type(() => BuildingWhereInput)
  @IsOptional()
  @Field(() => BuildingWhereInput, {
    nullable: true,
  })
  none?: BuildingWhereInput;
}
export { BuildingListRelationFilter as BuildingListRelationFilter };
