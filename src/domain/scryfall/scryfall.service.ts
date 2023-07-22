import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

const scryfallUri = 'https://api.scryfall.com';

@Injectable()
export class ScryfallService {
  constructor(private httpService: HttpService) {}

  async getCardByName(name: string): Promise<any> {
    const requestUri = `${scryfallUri}/cards/named?exact=${name}`;

    return this.callScryfallApi(requestUri);
  }

  async searchCardsByName(name: string): Promise<any> {
    const requestUri = `${scryfallUri}/cards/search?q=%21"${name}"+include%3Aextras&unique=prints`;

    // This will probably need pagination at some point. Response contains has_more attribute
    const response = await this.callScryfallApi(requestUri);

    return response.data;
  }

  private async callScryfallApi(uri: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(uri).pipe(),
    );

    return data;
  }
}


