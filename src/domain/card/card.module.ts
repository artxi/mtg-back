import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { ScryfallService } from '../scryfall/scryfall.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [CardController],
  providers: [CardService, ScryfallService],
})
export class CardModule {}