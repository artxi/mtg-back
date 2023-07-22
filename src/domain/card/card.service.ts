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
    const expression = new RegExp(name, 'i');
    return this.cardModel.findOne({ name: expression }).exec();
  }

  async create(createCardDto: any): Promise<Card> {
    const createdCard = new this.cardModel(createCardDto);
    return createdCard.save();
  }

  async findAll(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }

  /**
   * Retrieve a card DTO. Will fetch info from Scryfall if the card is not present in the database
   * @param name Exact card name, case-insensitive
   * @returns A card DTO
   */
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
