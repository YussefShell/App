import { Injectable } from "@nestjs/common";
import { RecommendationInputDto } from "../recommendationEngine/RecommendationInputDto";
import { RecommendationOutputDto } from "../recommendationEngine/RecommendationOutputDto";

@Injectable()
export class RecommendationEngineService {
  constructor() {}
  async GenerateRecommendations(args: RecommendationInputDto): Promise<RecommendationOutputDto> {
    throw new Error("Not implemented");
  }
}
