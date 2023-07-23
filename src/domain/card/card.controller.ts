import { Controller, Get, Query, Param } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './card.schema';

@Controller()
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('cards')
  getCards(@Query() params: any ): Promise<Card> {
    if (params.name) {
      return this.cardService.getCardByName(params.name);
    }
    
    if (params.search) {
      return this.cardService.listCardsByName(params.search);
    }
  }

  @Get('cards/:id')
  getByIdCard(@Param('id') id: string): Promise<Card> {
    return this.cardService.findById(id);
  }
}
