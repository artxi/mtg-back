import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './card.schema';
import { Model } from 'mongoose';
import { ScryfallService } from '../scryfall/scryfall.service';
import { CreateCardDto } from './dto/card.create.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectModel(Card.name) private cardModel: Model<Card>,
    private scryfallService: ScryfallService
  ) {}

  async getCards(_id: string, params: any, ) {
    return 
  }

  async findByName(name: string): Promise<Card> {
    const expression = new RegExp(name, 'i');
    return this.cardModel.findOne({ name: expression }).exec();
  }

  async findById(_id: string): Promise<Card> {
    return this.cardModel.findOne({ _id }).exec();
  }

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const createdCard = new this.cardModel(createCardDto);
    return createdCard.save();
  }

  async list(
    options: any,
    params: any,
    projection: any
  ): Promise<Card[]> {
    return this.cardModel.find({...options, ...params}, projection).exec();
  }

  async getCardByName(name: string): Promise<Card> {
    let card = await this.findByName(name);

    if (card) {
      return card;
    }

    const scryfallCard = await this.scryfallService.getCardByName(name);

    scryfallCard.scryfallId = scryfallCard.id;
    delete scryfallCard.id;

    card = await this.create(scryfallCard);

    return card;
  }

  async listCardsByName(name: string): Promise<Card> {
    return this.scryfallService.searchCardsByName(name);
  }
}
