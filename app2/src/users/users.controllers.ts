import { Controller, Get, Param, Req } from '@nestjs/common';
import type { Request } from 'express';
@Controller('users')
export class UserControllers {
  @Get()
  findAll(@Req() request: Request): {
    message: string;
    success: boolean;
    data: { id: number; name: string }[];
  } {
    // log the full details of the request Object

    /// headers
    console.log(request.headers);
    // query
    console.log(request.query);
    // params
    console.log(request.params);
    // body
    console.log(request.body); // generally empty when we get

    return {
      message: 'Congratulations Ashutosh, you are doing amazing',
      success: true,
      data: [
        {
          id: 1,
          name: 'Ashutosh',
        },
      ],
    };
  }

  // get user by id
  @Get(':id')
  getUserById(@Param('id') id: string): { message: string } {
    console.log(id);
    return {
      message: `your request id : == ${id}`,
    };
  }
}
