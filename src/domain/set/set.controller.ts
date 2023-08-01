import { Controller, Get, Query } from '@nestjs/common';
import { SetService } from './set.service';
// import { Card } from '../card/card.schema';

@Controller()
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get('sets')
  getSets(@Query() params: SetParams) {
    if (params.code) {
      return this.setService.byCode(params.code);
    }

    return this.setService.list();
  }

  // @Get('sets/:code/cards')
  // getSetCards(@Param('code') code: string, @Query() params): Promise<Card[]> {
  //   return this.setService.getSetCards(code, params);
  // }
}
