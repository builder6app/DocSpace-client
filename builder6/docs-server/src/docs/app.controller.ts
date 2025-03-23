import { Get, Controller, Param, Res, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { getConfigs } from '@builder6/core';
import { getDocsClient } from './lib/getDocsClient';


@Controller('/docs')
export class AppController {
  constructor() {}

  @Get('*react')
  getHome(@Res() res: Response) {
    const docsClientPath = getDocsClient();

    res.sendFile(docsClientPath);
  }
}
