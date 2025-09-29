import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleServices {
  // create function
  sayHello() {
    return {
      message: 'wow',
      success: true,
      data: [
        {
          name: 'Ashutosh',
        },
      ],
    };
  }
}
