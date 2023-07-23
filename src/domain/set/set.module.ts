import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { SetController } from './set.controller';
import { SetService } from './set.service';
import { Set, SetSchema } from './set.schema';
import { ScryfallService } from '../scryfall/scryfall.service';
import { CardModule } from '../card/card.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Set.name, schema: SetSchema }]),
    HttpModule,
    CardModule
  ],
  controllers: [SetController],
  providers: [SetService, ScryfallService],
})
export class SetModule {}