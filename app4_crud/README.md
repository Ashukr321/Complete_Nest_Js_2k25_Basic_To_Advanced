# Nest js crud operations 

# installation of mongoose in the nest js 
  npm install @nestjs/mongoose mongoose


# env configuration 
Ah, this is where NestJS handles things a bit differently from Express. You don’t need to install dotenv manually in most cases because NestJS provides its own @nestjs/config module, which internally uses dotenv

# best always create two file 
## .local.env 
## .prod.env


    npm install @nestjs/config

#


      import { Module } from '@nestjs/common';
      import { ConfigModule } from '@nestjs/config';

      @Module({
        imports: [
          ConfigModule.forRoot({
            isGlobal: true, // make ConfigService available globally
          }),
        ],
      })
      export class RootModule {
        constructor() {
          console.log('RootModule initialized');
        }
      }


## If you plan to use environment variables, access them via ConfigService, not via process.env directly (best practice)


# 1️⃣ How ConfigService works in NestJS

   When you import ConfigModule.forRoot({ isGlobal: true }) in your root module, ConfigService is automatically available in all modules via dependency injection.

  You only use app.get(ConfigService) in main.ts, because that’s outside of NestJS modules and you don’t have DI there yet.

  Inside modules/services/controllers, you simply inject it via constructor.

      import { Injectable } from '@nestjs/common';
    import { ConfigService } from '@nestjs/config';

    @Injectable()
    export class AppService {
      constructor(private configService: ConfigService) {}

      getPort() {
        return this.configService.get<number>('PORT', 3000);
      }
    }
