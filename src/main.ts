import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

process.on('uncaughtException', (error: any) => {
  console.log(error.stack);
});

process.on('unhandledRejection', (error: any) => {
  console.log(error.stack);
});

process.on('UnhandledPromiseRejectionWarning', (error: any) => {
  console.log(error.stack);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
