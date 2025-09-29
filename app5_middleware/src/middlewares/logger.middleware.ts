import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
// const LoggerMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   console.log('logger middleware ');
//   next();
// };


@Injectable()
export class LoggerMiddleware  implements NestMiddleware{
  use(req:Request,res:Response,next:NextFunction){
    console.log("class based logger middleware")
    next();
  }
}



