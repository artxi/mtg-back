import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { Card, CardSchema } from './card.schema';
import { ScryfallService } from '../scryfall/scryfall.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
    HttpModule
  ],
  controllers: [CardController],
  providers: [CardService, ScryfallService],
})
export class CardModule {}