import { Module } from '@nestjs/common';
import { BooksController } from './books.controllers';
import { BookServices } from './books.services';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BookServices],
  exports: [],
})
export class BooksModule {
  constructor() {
    console.log('book module');
  }
}
