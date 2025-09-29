import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExampleController } from './root.controller';
import { ExampleServices } from './root.services';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { GreetingModule } from './greeting/greeting.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:".local.env",
      // envFilePath:".prod.env",
    }),
    GreetingModule,
  ],
  controllers: [ExampleController],
  providers: [ExampleServices],
})

export class RootModule implements NestModule {
  constructor() {
    console.log("root module")
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}


