import { Controller, Get, Query, Param } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './card.schema';

@Controller()
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('cards')
  getCards(@Query() params: object): Promise<Card[]> {
    return this.cardService.listCardsByName(params);
  }

  @Get('cards/:id')
  getByIdCard(@Param('id') id: string): Promise<Card> {
    return this.cardService.findById(id);
  }
}
