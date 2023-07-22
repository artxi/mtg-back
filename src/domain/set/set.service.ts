import { Injectable } from '@nestjs/common';
import { ScryfallService } from '../scryfall/scryfall.service';

@Injectable()
export class SetService {
  constructor(private scryfallService: ScryfallService) {}

  async getSet(code: string): Promise<string> {
    return this.scryfallService.getSetByCode(code);
  }

  async listSets(): Promise<string> {
    return this.scryfallService.listSets();
  }
}
