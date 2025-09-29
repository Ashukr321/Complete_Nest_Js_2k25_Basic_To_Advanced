import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExampleController } from './root.controller';
import { ExampleServices } from './root.services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:".local.env",
      // envFilePath:".prod.env",
    }),
  ],
  controllers: [ExampleController],
  providers: [ExampleServices],
})
export class RootModule {
  constructor() {
    console.log("root module")
  }
}
