import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError, map } from 'rxjs';

const BASE_SCRYFALL_URI = 'https://api.scryfall.com';

const SETS_ENDPOINT = '/sets';

@Injectable()
export class ScryfallService {
  constructor(private httpService: HttpService) {}

  /**
   * Scryfall endpoint /sets/tcgplayer/:id
   * @param id TcgPlayer ID to match
   * @param params Optional params for this endpoint
   * @returns A set object matching the TcgPlayer ID
   */
  setByTcgPlayerId(id: number, params?: ScryfallSetParams) {
    return this.callScryfallApi(`${SETS_ENDPOINT}/tcgplayer/${id}`, params);
  }

  /**
   * Scryfall endpoint /sets/:id
   * @param id Scryfall ID to match
   * @param params Optional params for this endpoint
   * @returns A set object matching the Scryfall ID
   */
  setById(id: string, params?: ScryfallSetParams) {
    return this.callScryfallApi(`${SETS_ENDPOINT}/${id}`, params);
  }

  /**
   * Scryfall endpoint /sets/:code
   * @param code Set code to match
   * @param params Optional params for this endpoint
   * @returns A set object matching the set code
   */
  setByCode(code: string, params?: ScryfallSetParams) {
    return this.callScryfallApi(`${SETS_ENDPOINT}/${code}`, params);
  }

  /**
   * Scryfall endpoint /sets
   * @param params Optional params for this endpoint
   * @returns A list of all set objects in the Scryfall API
   */
  listSets(params?: ScryfallSetParams) {
    return this.callScryfallApi(SETS_ENDPOINT, params);
  }

  private callScryfallApi(uri: string, params = {}) {
    const request = this.httpService
      .get(BASE_SCRYFALL_URI + uri, params)
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
