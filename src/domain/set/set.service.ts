import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Set } from './set.schema';
import { Model } from 'mongoose';
import { ScryfallService } from '../scryfall/scryfall.service';
import { CardService } from '../card/card.service';
import { Card } from '../card/card.schema';
import { CreateSetDto } from './dto/set.create.dto';

@Injectable()
export class SetService {
  constructor(
    @InjectModel(Set.name) private setModel: Model<Set>,
    private scryfallService: ScryfallService,
    private cardService: CardService
  ) {}

  async findByCode(code: string): Promise<Set> {
    const expression = new RegExp(code, 'i');
    return this.setModel.findOne({ code: expression }).exec();
  }

  async create(createSetDto: CreateSetDto): Promise<Set> {
    const createdSet = new this.setModel(createSetDto);
    return createdSet.save();
  }

  async listSets(): Promise<any> {
    return this.setModel.find().exec();
  }

  async getSetByCode(code: string): Promise<Set> {
    let set = await this.findByCode(code);

    if (set) {
      return set;
    }

    const scryfallSet = await this.scryfallService.getSetByCode(code);

    scryfallSet.scryfallId = scryfallSet.id;
    delete scryfallSet.id;

    set = await this.create(scryfallSet);

    return set;
  }

  async getSetCards(code: string, params: any): Promise<Card[]> {
    return this.cardService.list(
      {set: code},
      params,
      {name: 1, image: '$image_uris.normal'}
    );
  }
}
