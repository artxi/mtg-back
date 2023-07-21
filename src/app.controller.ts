import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('card/:name')
  getCard(@Param() { name }): Promise<any> {
    return this.appService.getCard(name);
  }

  @Get('search/:name')
  searchCard(@Param() { name }): Promise<any> {
    return this.appService.searchCard(name);
  }
}
