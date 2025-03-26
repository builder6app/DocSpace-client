import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoleculerModule } from '@builder6/moleculer';
import { OidcModule } from '@builder6/oidc';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocsModule } from './docs/docs.module';
import { AuthModule, getConfigs, getEnvConfigs, getMoleculerConfigs } from '@builder6/core';
import path from 'path';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      load: [getConfigs],
      isGlobal: true, // 使配置在整个应用中可用
    }),
    MoleculerModule.forRoot({
      // brokerName: "builder6", // if you have multiple broker
      namespace: 'steedos', // some moleculer options
      transporter: process.env.B6_TRANSPORTER,
      // hotReload: true, // hotReload feature from moleculer will not work
      ...getMoleculerConfigs(),
      ...getEnvConfigs(),
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'client'),
    }),
    OidcModule,
    DocsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
