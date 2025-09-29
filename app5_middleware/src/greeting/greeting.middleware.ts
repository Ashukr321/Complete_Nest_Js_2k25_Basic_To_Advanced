import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GreetingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("this is greeting middleware apply on module based")
    next();
  }
}
