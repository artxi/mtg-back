import { Controller, Get, Param } from '@nestjs/common';
import { SetService } from './set.service';

@Controller()
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get('sets')
  listSets(@Param() {}): Promise<string> {
    return this.setService.listSets();
  }

  @Get('sets/:name')
  getSet(@Param() { name: code }): Promise<string> {
    return this.setService.getSet(code);
  }
}
