import * as graphql from "@nestjs/graphql";
import { RecommendationInputDto } from "../recommendationEngine/RecommendationInputDto";
import { RecommendationOutputDto } from "../recommendationEngine/RecommendationOutputDto";
import { RecommendationEngineService } from "./recommendationengine.service";

export class RecommendationEngineResolver {
  constructor(protected readonly service: RecommendationEngineService) {}

  @graphql.Mutation(() => RecommendationOutputDto)
  async GenerateRecommendations(
    @graphql.Args()
    args: RecommendationInputDto
  ): Promise<RecommendationOutputDto> {
    return this.service.GenerateRecommendations(args);
  }
}
