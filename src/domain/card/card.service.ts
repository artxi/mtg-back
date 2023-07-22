import { Injectable } from '@nestjs/common';
import { ScryfallService } from '../scryfall/scryfall.service';

@Injectable()
export class CardService {
  constructor(private scryfallService: ScryfallService) {}

  async getCardByName(name: string): Promise<string> {
    return this.scryfallService.getCardByName(name);
  }

  async listCardsByName(name: string): Promise<string> {
    return this.scryfallService.searchCardsByName(name);
  }
}
