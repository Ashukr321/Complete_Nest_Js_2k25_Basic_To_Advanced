# add middleware in the nest js 
# two ways to add 
## by using simple functional based approach 
## 2. by using class based approach 

    @Injectable()
    class LoggerMiddleware  implements NestMiddleware{
      use(req:Request,res:Response,next:NextFunction){
        console.log("class based logger middleware")
        next();
      }
    }
  


  export class RootModule implements NestModule {
  constructor() {
      console.log("root module")
    }
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*');
    }
  }


