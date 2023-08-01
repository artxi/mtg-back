import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Set } from './set.schema';
// import { Model } from 'mongoose';
import { ScryfallService } from '../scryfall/scryfall.service';
// import { CreateSetDto } from './dto/set.create.dto';

@Injectable()
export class SetService {
  constructor(
    // @InjectModel(Set.name) private setModel: Model<Set>,
    private scryfallService: ScryfallService
  ) {}

  async byCode(code: string) {
    return this.scryfallService.sets({ code: code });
  }

  async byScryfallId(id: string) {
    return this.scryfallService.sets({ scryfallId: id });
  }

  async byTcgPlayerId(id: number) {
    return this.scryfallService.sets({ tcgPlayerId: id });
  }

  async list() {
    return this.scryfallService.sets();
  }
}
