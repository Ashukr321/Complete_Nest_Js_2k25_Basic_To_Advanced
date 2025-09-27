import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('root module');
  }
}
