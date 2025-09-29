import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { Request,Response,NextFunction } from 'express';
import LoggerMiddleware from './middlewares/logger.middleware';
const globalMiddleware = (req:Request,res:Response,next:NextFunction)=>{
  console.log("this is the global middleware")
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  console.log("port number : "+process.env.PORT);
  app.use(globalMiddleware);
  app.use(LoggerMiddleware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
