import { Injectable } from "@nestjs/common";
import { SendEmailRequestDto } from "../notification/SendEmailRequestDto";
import { SendEmailResponseDto } from "../notification/SendEmailResponseDto";

@Injectable()
export class NotificationService {
  constructor() {}
  async SendEmailNotification(args: SendEmailRequestDto): Promise<SendEmailResponseDto> {
    throw new Error("Not implemented");
  }
}
