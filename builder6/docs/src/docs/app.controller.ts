import { Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import path from 'path';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get('/logo')
  async getLogo(@Query('logotype') logotype: string, @Res() res: Response) {
    if (logotype === '1') res.redirect('/static/images/logo-wide.png');
    else res.redirect('/static/images/logo.png');
  }

  @Get('/login')
  login(@Req() req: Request, @Res() res: Response) {
    return res.redirect('/api/v6/oidc/default/login');
  }

  @Post('/api/2.0/authentication/logout')
  logout(@Req() req: Request, @Res() res: Response) {
    return res.redirect('/api/v6/oidc/default/logout');
  }
}
