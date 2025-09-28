import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:".local.env"
      // envFilePath:".prod.env"
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})

export class RootModule {
  // constructor
  constructor() {
    console.log('root module');
  }
}

//If you plan to use environment variables, access them via ConfigService, not via process.env directly (best practice)
