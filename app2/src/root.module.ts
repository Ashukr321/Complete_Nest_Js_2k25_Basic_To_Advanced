import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';


@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log("root module")
  }
}
