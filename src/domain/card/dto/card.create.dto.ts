export class CreateCardDto {
  readonly name: string;
  readonly scryfallId: string;
  readonly cardmarket_id: number;
  readonly lang: string;
  readonly released_at: string;
  readonly image_uris: {
    readonly small: string,
    readonly normal: string,
    readonly large: string,
    readonly png: string,
    readonly art_crop: string,
    readonly border_crop: string
  };
  readonly mana_cost: string;
  readonly cmc: number;
  readonly type_line: string;
  readonly oracle_text: string;
  readonly colors: string[];
  readonly color_identity: string[];
  readonly keywords: string[];
  readonly legalities: {
    readonly standard: string,
    readonly future: string,
    readonly historic: string,
    readonly gladiator: string,
    readonly pioneer: string,
    readonly explorer: string,
    readonly modern: string,
    readonly legacy: string,
    readonly pauper: string,
    readonly vintage: string,
    readonly penny: string,
    readonly commander: string,
    readonly oathbreaker: string,
    readonly brawl: string,
    readonly historicbrawl: string,
    readonly alchemy: string,
    readonly paupercommander: string,
    readonly duel: string,
    readonly oldschool: string,
    readonly premodern: string,
    readonly predh: string
  };
  readonly reserved: boolean;
  readonly foil: boolean;
  readonly nonfoil: boolean;
  readonly reprint: boolean;
  readonly set_id: string;
  readonly set: string;
  readonly set_name: string;
  readonly collector_number: string;
  readonly digital: boolean;
  readonly rarity: string;
  readonly artist: string;
  readonly frame: string;
}