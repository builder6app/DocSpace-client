import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { FilesModule } from '@builder6/files';
import { AuthModule } from '@builder6/core';

@Module({
  imports: [FilesModule, AuthModule],
  providers: [DocsService],
  controllers: [DocsController]
})
export class DocsModule {}
