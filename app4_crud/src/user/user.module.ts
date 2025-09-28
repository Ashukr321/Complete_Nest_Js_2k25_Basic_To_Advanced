import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({})
export class UserModule {
  constructor(private readonly configService: ConfigService) {
    console.log('user module');
    console.log('user module ' + configService.get<number>('PORT'));
  }
}
