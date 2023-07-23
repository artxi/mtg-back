import { Controller, Get, Query, Param } from '@nestjs/common';
import { SetService } from './set.service';
import { Card } from '../card/card.schema';

@Controller()
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get('sets')
  getSets(@Query() params) {
    if (params.code) {
      return this.setService.getSetByCode(params.code);
    }

    return this.setService.listSets();
  }

  @Get('sets/:code/cards')
  getSetCards(@Param('code') code: string, @Query() params): Promise<Card[]> {
    return this.setService.getSetCards(code, params);
  }
}
