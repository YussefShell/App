import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RecommendationEngineService } from "./recommendationengine.service";
import { RecommendationInputDto } from "../recommendationEngine/RecommendationInputDto";
import { RecommendationOutputDto } from "../recommendationEngine/RecommendationOutputDto";

@swagger.ApiTags("recommendationEngines")
@common.Controller("recommendationEngines")
export class RecommendationEngineController {
  constructor(protected readonly service: RecommendationEngineService) {}

  @common.Post("/recommendations")
  @swagger.ApiOkResponse({
    type: RecommendationOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateRecommendations(
    @common.Body()
    body: RecommendationInputDto
  ): Promise<RecommendationOutputDto> {
        return this.service.GenerateRecommendations(body);
      }
}
