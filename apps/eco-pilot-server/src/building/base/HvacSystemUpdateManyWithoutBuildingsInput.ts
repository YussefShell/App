/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { HvacSystemWhereUniqueInput } from "../../hvacSystem/base/HvacSystemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HvacSystemUpdateManyWithoutBuildingsInput {
  @Field(() => [HvacSystemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HvacSystemWhereUniqueInput],
  })
  connect?: Array<HvacSystemWhereUniqueInput>;

  @Field(() => [HvacSystemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HvacSystemWhereUniqueInput],
  })
  disconnect?: Array<HvacSystemWhereUniqueInput>;

  @Field(() => [HvacSystemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HvacSystemWhereUniqueInput],
  })
  set?: Array<HvacSystemWhereUniqueInput>;
}

export { HvacSystemUpdateManyWithoutBuildingsInput as HvacSystemUpdateManyWithoutBuildingsInput };
