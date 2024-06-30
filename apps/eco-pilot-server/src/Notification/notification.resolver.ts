import * as graphql from "@nestjs/graphql";
import { SendEmailRequestDto } from "../notification/SendEmailRequestDto";
import { SendEmailResponseDto } from "../notification/SendEmailResponseDto";
import { NotificationService } from "./notification.service";

export class NotificationResolver {
  constructor(protected readonly service: NotificationService) {}

  @graphql.Mutation(() => SendEmailResponseDto)
  async SendEmailNotification(
    @graphql.Args()
    args: SendEmailRequestDto
  ): Promise<SendEmailResponseDto> {
    return this.service.SendEmailNotification(args);
  }
}
