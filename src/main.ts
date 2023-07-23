import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

process.on('uncaughtException', (error) => {
  console.log(error);
});

process.on('unhandledRejection', (error) => {
  console.log(error);
});

process.on('UnhandledPromiseRejectionWarning', (error) => {
  console.log(error);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
