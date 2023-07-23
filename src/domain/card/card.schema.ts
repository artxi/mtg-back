import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CardDocument = HydratedDocument<Card>;

@Schema()
export class Card {
  @Prop()
  name: string;

  @Prop()
  printed_name: string;

  @Prop()
  scryfallId: string;

  @Prop()
  cardmarket_id: number;

  @Prop()
  lang: string;

  @Prop()
  released_at: string;

  @Prop()
  layout: string;

  @Prop({ type: Object })
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };

  @Prop()
  mana_cost: string;

  @Prop()
  cmc: number;

  @Prop()
  type_line: string;

  @Prop()
  printed_type_line: string;

  @Prop()
  oracle_text: string;

  @Prop()
  printed_text: string;

  @Prop()
  power: string;

  @Prop()
  toughness: string;

  @Prop()
  colors: string[];

  @Prop()
  color_identity: string[];

  @Prop()
  keywords: string[];

  @Prop({ type: Object })
  legalities: {
    standard: string;
    future: string;
    historic: string;
    gladiator: string;
    pioneer: string;
    explorer: string;
    modern: string;
    legacy: string;
    pauper: string;
    vintage: string;
    penny: string;
    commander: string;
    oathbreaker: string;
    brawl: string;
    historicbrawl: string;
    alchemy: string;
    paupercommander: string;
    duel: string;
    oldschool: string;
    premodern: string;
    predh: string;
  };

  @Prop()
  games: string[];

  @Prop()
  reserved: boolean;

  @Prop()
  foil: boolean;

  @Prop()
  nonfoil: boolean;

  @Prop()
  finishes: string[];

  @Prop()
  reprint: boolean;

  @Prop()
  variation: boolean;

  @Prop()
  set_id: string;

  @Prop()
  set: string;

  @Prop()
  set_name: string;

  @Prop()
  collector_number: string;

  @Prop()
  digital: boolean;

  @Prop()
  rarity: string;

  @Prop()
  artist: string;

  @Prop()
  frame: string;

  @Prop()
  frame_effects: string[];

  @Prop()
  border_color: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
