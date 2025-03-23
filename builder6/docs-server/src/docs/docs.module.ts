import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { FilesModule } from '@builder6/files';
import { AuthModule } from '@builder6/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { getDocsClient } from './lib/getDocsClient';
import { AppController } from './app.controller';

@Module({
  imports: [FilesModule, AuthModule,
      ServeStaticModule.forRoot({
        rootPath: getDocsClient(),
        serveRoot: '/docs',
      }),],
  providers: [DocsService],
  controllers: [DocsController, AppController]
})
export class DocsModule {}
