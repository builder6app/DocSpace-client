import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { FilesModule } from '@builder6/files';
import { AuthModule } from '@builder6/core';
import { SettingsService } from './settings.service';

@Module({
  imports: [FilesModule, AuthModule],
  providers: [DocsService, SettingsService],
  controllers: [DocsController]
})
export class DocsModule {}
