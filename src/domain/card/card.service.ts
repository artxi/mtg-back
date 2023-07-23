import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './card.schema';
import { Model } from 'mongoose';
import { CreateCardDto } from './dto/card.create.dto';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  async findById(_id: string): Promise<Card> {
    return this.cardModel.findOne({ _id }).exec();
  }

  async findByName(name: string): Promise<Card> {
    const expression = new RegExp(name, 'i');
    return this.cardModel.findOne({ name: expression }).exec();
  }

  async list(query, projection): Promise<Card[]> {
    return this.cardModel.find(query, projection).exec();
  }

  async listCardsByName(params): Promise<Card[]> {
    const name = new RegExp(params.name, 'i');
    const lang = params.lang || 'en';

    return this.list(
      { name, lang },
      {
        name: 1,
        image: '$image_uris.normal'
      }
    );
  }

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const createdCard = new this.cardModel(createCardDto);
    return createdCard.save();
  }
}
