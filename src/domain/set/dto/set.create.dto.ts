export class CreateSetDto {
  readonly scryfallId: string;
  readonly code: string;
  readonly name: string;
  readonly released_at: string;
  readonly set_type: string;
  readonly card_count: number;
  readonly digital: boolean;
  readonly block_code: string;
  readonly block: string;
  readonly icon_svg_uri: string;
}
