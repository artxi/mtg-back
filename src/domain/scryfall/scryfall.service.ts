import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError, map } from 'rxjs';

const scryfallUri = 'https://api.scryfall.com';

@Injectable()
export class ScryfallService {
  constructor(private httpService: HttpService) {}

  async getCardByName(name: string): Promise<any> {
    return this.callScryfallApi(`${scryfallUri}/cards/named?exact=${name}`);
  }

  async searchCardsByName(name: string): Promise<any> {
    // This will probably need pagination at some point. Response contains has_more attribute
    const response = await this.callScryfallApi(`${scryfallUri}/cards/search?q=%21"${name}"+include%3Aextras&unique=prints`);

    return response.data;
  }

  async getSetByCode(code: string): Promise<any> {
    return this.callScryfallApi(`${scryfallUri}/sets/${code}`);
  }

  async listSets(): Promise<any> {
    // This will probably need pagination at some point. Response contains has_more attribute
    const response = await this.callScryfallApi(`${scryfallUri}/sets`);

    return response.data;
  }

  private async callScryfallApi(uri: string) {
    const request = this.httpService
      .get(uri)
      .pipe(
        map(response => response.data)
      )
      .pipe(
        catchError(() => {
          throw new Error('API resource not found');
        }),
      );

    return firstValueFrom(request);
  }
}


