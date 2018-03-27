
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ApplicationModule, {
    transport: Transport.REDIS,
    url: 'redis://localhost:6379',
  });
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();