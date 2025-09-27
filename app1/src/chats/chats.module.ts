import { Module } from '@nestjs/common';

@Module({
  imports:[]
})
export class ChatsModule {
  constructor(){
    console.log("chat module")
  }
}
