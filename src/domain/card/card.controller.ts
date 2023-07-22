import { Controller, Get, Query } from '@nestjs/common';
import { CardService } from './card.service';

@Controller()
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('cards')
  getCards(@Query() params: any ): Promise<string> {
    if (params.name) {
      return this.cardService.getCardByName(params.name);
    }
    
    if (params.search) {
      return this.cardService.listCardsByName(params.search);
    }
  }
}
