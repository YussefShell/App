import { Module } from "@nestjs/common";
import { RecommendationEngineService } from "./recommendationengine.service";
import { RecommendationEngineController } from "./recommendationengine.controller";
import { RecommendationEngineResolver } from "./recommendationengine.resolver";

@Module({
  controllers: [RecommendationEngineController],
  providers: [RecommendationEngineService, RecommendationEngineResolver],
  exports: [RecommendationEngineService],
})
export class RecommendationEngineModule {}
