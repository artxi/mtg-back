import { Module } from '@nestjs/common';
import { CardModule } from './domain/card/card.module';

@Module({
  imports: [
    CardModule
  ],
})
export class AppModule {}
