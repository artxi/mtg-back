import { Module } from '@nestjs/common';
import { CardModule } from './domain/card/card.module';
import { SetModule } from './domain/set/set.module';

@Module({
  imports: [
    CardModule,
    SetModule
  ],
})
export class AppModule {}
