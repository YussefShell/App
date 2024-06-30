import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationService } from "./notification.service";
import { SendEmailRequestDto } from "../notification/SendEmailRequestDto";
import { SendEmailResponseDto } from "../notification/SendEmailResponseDto";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationController {
  constructor(protected readonly service: NotificationService) {}

  @common.Post("/send-email")
  @swagger.ApiOkResponse({
    type: SendEmailResponseDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendEmailNotification(
    @common.Body()
    body: SendEmailRequestDto
  ): Promise<SendEmailResponseDto> {
        return this.service.SendEmailNotification(body);
      }
}
