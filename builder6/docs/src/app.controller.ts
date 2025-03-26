import { Controller, Get, Post, Req, Res, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import path from 'path';
import { AuthGuard } from '@builder6/core';
import { AuthExceptionFilter } from './filters/unauthorized.filter';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get('/')
  index(@Req() req: Request, @Res() res: Response) {
    // If the user is authenticated, serve the React app
    const reactApp = path.join(__dirname, '..', 'client');
    return res.sendFile('index.html', { root: reactApp }); // Adjust the path as needed
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
