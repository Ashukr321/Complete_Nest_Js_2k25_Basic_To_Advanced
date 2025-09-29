import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  sayGoodMorning(){
    return {
      message:"good morning"
    }
  }
}
