import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import {ConfigService} from '@nestjs/config'
async function bootstrap() {
  
  const app = await NestFactory.create(RootModule);
  const configService = app.get(ConfigService);
  console.log(process.env.PORT);
  const port = configService.get<number>('PORT',3000);

  await app.listen(port);
}
bootstrap();
