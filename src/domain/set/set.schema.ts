import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SetDocument = HydratedDocument<Set>;

@Schema()
export class Set {
  @Prop()
  scryfallId: string;

  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  released_at: string;

  @Prop()
  set_type: string;

  @Prop()
  card_count: number;

  @Prop()
  digital: boolean;

  @Prop()
  block_code: string;

  @Prop()
  block: string;

  @Prop()
  icon_svg_uri: string;
}

export const SetSchema = SchemaFactory.createForClass(Set);
