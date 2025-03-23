import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoleculerModule } from '@builder6/moleculer';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocsModule } from './docs/docs.module';
import { getConfigs, getEnvConfigs, getMoleculerConfigs } from '@builder6/core';
import path from 'path';

const getDocsClient = () => {
  try {
    // 解析 @builder6/docs-client 模块的路径
    const docsClientPath = path.dirname(require.resolve('@builder6/docs-client/package.json'));
    const docsClientDistPath = path.join(docsClientPath, 'dist');
    return docsClientDistPath;
  } catch (error) {
    throw new Error('无法解析 @builder6/docs-client 模块: ' + error.message);
  }
};

@Module({
  imports: [
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
      rootPath: getDocsClient(),
    }),
    DocsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
