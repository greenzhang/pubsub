import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule, Transport);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    url: 'redis://localhost:6379',
  });
  await app.listen(3000);
}
bootstrap();
