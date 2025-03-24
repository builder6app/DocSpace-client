import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: function (origin, callback) {
      callback(null, true);
    },
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.B6_PORT ?? 5200);
}
bootstrap();
