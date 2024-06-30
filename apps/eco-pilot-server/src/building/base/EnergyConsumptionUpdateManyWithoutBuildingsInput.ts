/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EnergyConsumptionWhereUniqueInput } from "../../energyConsumption/base/EnergyConsumptionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EnergyConsumptionUpdateManyWithoutBuildingsInput {
  @Field(() => [EnergyConsumptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EnergyConsumptionWhereUniqueInput],
  })
  connect?: Array<EnergyConsumptionWhereUniqueInput>;

  @Field(() => [EnergyConsumptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EnergyConsumptionWhereUniqueInput],
  })
  disconnect?: Array<EnergyConsumptionWhereUniqueInput>;

  @Field(() => [EnergyConsumptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EnergyConsumptionWhereUniqueInput],
  })
  set?: Array<EnergyConsumptionWhereUniqueInput>;
}

export { EnergyConsumptionUpdateManyWithoutBuildingsInput as EnergyConsumptionUpdateManyWithoutBuildingsInput };
