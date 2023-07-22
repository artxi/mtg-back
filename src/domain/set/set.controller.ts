import { Controller, Get, Query } from '@nestjs/common';
import { SetService } from './set.service';

@Controller()
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get('sets')
  getSets(@Query() params: any): Promise<string> {
    if (params.code) {
      return this.setService.getSetByCode(params.code);
    }

    return this.setService.listSets();
  }
}
