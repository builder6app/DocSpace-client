import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { FilesModule } from '@builder6/files';
import { AuthModule, MongodbModule } from '@builder6/core';
import { SettingsService } from './settings.service';
import { AppController } from './app.controller';
import { SettingsController } from './settings.controller';

@Module({
  imports: [FilesModule, AuthModule, MongodbModule],
  providers: [DocsService, SettingsService],
  controllers: [AppController, DocsController, SettingsController],
})
export class DocsModule {}
