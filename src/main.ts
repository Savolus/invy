import { NestFactory } from '@nestjs/core';
import { HttpStatus } from '@nestjs/common';
import { /*Callback, Context,*/ Handler } from 'aws-lambda';

import { AppModule } from './app.module';
import { AppService } from './app.service';

export const handler: Handler = async (/*
  _event: any,
  _context: Context,
  _callback: Callback,
*/) => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appService = appContext.get(AppService);

  return {
    body: appService.getHello(),
    statusCode: HttpStatus.OK,
  };
};
