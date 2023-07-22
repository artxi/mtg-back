import { Controller, Get, Param } from '@nestjs/common';
import { CardService } from './card.service';

@Controller()
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('card/:name')
  getCard(@Param() { name }): Promise<string> {
    return this.cardService.getCard(name);
  }

  @Get('search/:name')
  searchCard(@Param() { name }): Promise<string> {
    return this.cardService.searchCard(name);
  }
}
