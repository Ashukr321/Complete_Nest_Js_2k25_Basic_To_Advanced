import { Module } from '@nestjs/common';
import { UserControllers } from './users.controllers';

@Module({
  imports: [],
  controllers: [UserControllers],
})
export class UsersModule {
  constructor() {
    console.log('user module');
  }
}
