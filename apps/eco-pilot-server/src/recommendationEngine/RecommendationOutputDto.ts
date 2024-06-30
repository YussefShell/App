import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("RecommendationOutputDtoObject")
class RecommendationOutputDto {
    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    recommendations!: string;
}

export { RecommendationOutputDto as RecommendationOutputDto };