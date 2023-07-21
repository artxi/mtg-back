import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getCard(name: string): any {
    const uri = `https://api.scryfall.com/cards/named?exact=${name}`;

    return this.httpService.get(uri).pipe(
      map(response => `<img src=${response.data.image_uris.normal}>`)
    );
  }

  async searchCard(name: string): Promise<any> {
    const uri = `https://api.scryfall.com/cards/search?q=%21"${name}"+include%3Aextras&unique=prints`;

    const { data } = await firstValueFrom(
      this.httpService.get(uri).pipe(),
    );

    let response = '';

    for (const cardData of data.data) {
      response += `<img src=${cardData.image_uris.normal}>`
    }

    return response;
  }
}
