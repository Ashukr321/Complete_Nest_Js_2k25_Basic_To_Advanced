import { Controller, Get } from '@nestjs/common';
import { ExampleServices } from './root.services';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleServices: ExampleServices) {}
  // hello
  @Get()
  hello() {
    return this.exampleServices.sayHello();
  }
}
