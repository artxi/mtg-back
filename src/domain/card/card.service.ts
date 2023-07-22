import { Injectable } from '@nestjs/common';
import { ScryfallService } from '../scryfall/scryfall.service';

@Injectable()
export class CardService {
  constructor(private scryfallService: ScryfallService) {}

  async getCard(name: string): Promise<string> {
    const card = await this.scryfallService.getCardByName(name);

    return `<img src=${card.image_uris.normal}>`;
  }

  async searchCard(name: string): Promise<string> {
    const cards = await this.scryfallService.searchCardsByName(name);

    let response = '';

    for (const card of cards) {
      response += `<img src=${card.image_uris.normal}>`
    }

    return response;
  }
}
