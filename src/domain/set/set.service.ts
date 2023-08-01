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

  async byCode(code: string, params?: SetParams) {
    return this.scryfallService.setByCode(code, params);
  }

  async byScryfallId(id: string, params?: SetParams) {
    return this.scryfallService.setById(id, params);
  }

  async byTcgPlayerId(id: number, params?: SetParams) {
    return this.scryfallService.setByTcgPlayerId(id, params);
  }

  async list(params?: SetParams) {
    // TO-DO: Add pagination
    return this.scryfallService.listSets(params);
  }
}
