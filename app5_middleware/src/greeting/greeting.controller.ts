import { Controller, Get } from '@nestjs/common';
import { GreetingService } from './greeting.service';

@Controller('greeting')
export class GreetingController {
  constructor(private readonly greet: GreetingService) {}
  @Get()
  sayGoodMorning() {
    return this.greet.sayGoodMorning();
  }
}
