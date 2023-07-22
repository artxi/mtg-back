import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardModule } from './domain/card/card.module';
import { SetModule } from './domain/set/set.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mtg'),
    CardModule,
    SetModule
  ],
})
export class AppModule {}
