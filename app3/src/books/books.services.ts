import { Injectable } from '@nestjs/common';
import { BookResponse } from './interfaces/book.interface';

@Injectable()
export class BookServices {
  findAllBooks(): BookResponse {
    return {
      message: 'wow!',
      success: true,
      data: [
        {
          id: 1,
          bookName: 'DATA STRUCUTRE MADE EASY',
          price: 399,
          author: ['ashutosh', 'amit'],
        },
        {
          id: 2,
          bookName: 'harry potter',
          price: 399,
          author: ['ashutosh', 'Rahul'],
        },
      ],
    };
  }
}
