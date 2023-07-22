import { Controller, Get, Query } from '@nestjs/common';
import { SetService } from './set.service';
import { Set } from './set.schema';

@Controller()
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get('sets')
  getSets(@Query() params: any): Promise<Set> {
    if (params.code) {
      return this.setService.getSetByCode(params.code);
    }

    return this.setService.listSets();
  }
}
