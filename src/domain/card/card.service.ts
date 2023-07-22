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

  async findByName(name: string): Promise<Card> {
    return this.cardModel.findOne({ name }).exec();
  }

  async create(createCardDto: any): Promise<Card> {
    const createdCard = new this.cardModel(createCardDto);
    return createdCard.save();
  }

  async findAll(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }

  async getCardByName(name: string): Promise<string> {
    // Find first in DB
    // If found in DB return
    // Else fetch from scryfall, save in DB and return
    const card = await this.scryfallService.getCardByName(name);

    return card;
  }

  async listCardsByName(name: string): Promise<string> {
    return this.scryfallService.searchCardsByName(name);
  }
}
