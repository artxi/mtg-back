import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SetController } from './set.controller';
import { SetService } from './set.service';
import { ScryfallService } from '../scryfall/scryfall.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [SetController],
  providers: [SetService, ScryfallService],
})
export class SetModule {}