import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError, map } from 'rxjs';

const baseScryfallUri = 'https://api.scryfall.com';

const SETS_ENDPOINT = '/sets';

@Injectable()
export class ScryfallService {
  constructor(private httpService: HttpService) {}

  setByTcgPlayerId(id: number, params?: ScryfallSetParams) {
    return this.callScryfallApi(`${SETS_ENDPOINT}/tcgplayer/${id}`, params);
  }

  setById(id: string, params?: ScryfallSetParams) {
    return this.callScryfallApi(`${SETS_ENDPOINT}/${id}`, params);
  }

  setByCode(code: string, params?: ScryfallSetParams) {
    return this.callScryfallApi(`${SETS_ENDPOINT}/${code}`, params);
  }

  listSets(params?: ScryfallSetParams) {
    return this.callScryfallApi(SETS_ENDPOINT, params);
  }

  private callScryfallApi(uri: string, params = {}) {
    const request = this.httpService
      .get(baseScryfallUri + uri, params)
      .pipe(map((response) => response.data))
      .pipe(
        catchError((e) => {
          throw new HttpException(
            e.response.data.details,
            e.response.data.status
          );
        })
      );

    return firstValueFrom(request);
  }
}
