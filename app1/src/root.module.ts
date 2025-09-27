

import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ChatsModule } from './chats/chats.module';


@Module({
  imports: [UsersModule, OrdersModule, ChatsModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log("root module")
  }
}
