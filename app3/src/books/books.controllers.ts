import { Controller, Get } from '@nestjs/common';
import { BookServices } from './books.services';

@Controller('book')
export class BooksController {
  constructor(private BookServices: BookServices) {}
  @Get()
  findAllBooks() {
    return this.BookServices.findAllBooks();
  }
}
