import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GreetingController } from './greeting.controller';
import { GreetingService } from './greeting.service';
import { GreetingMiddleware } from './greeting.middleware';

@Module({
  imports: [],
  controllers: [GreetingController],
  providers: [GreetingService],
  exports: [],
})
export class GreetingModule implements NestModule {
  constructor() {
    console.log('greeting module');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GreetingMiddleware).forRoutes(GreetingController);
  }
}
