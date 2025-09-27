import { Module } from "@nestjs/common";
import { Features2Module } from "src/features2/features2.module";

@Module({
  imports: [Features2Module],
})
export class OrdersModule {
  constructor() {
    console.log("order module");
  }
}
