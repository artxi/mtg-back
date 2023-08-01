import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError, map } from 'rxjs';

const baseScryfallUri = 'https://api.scryfall.com';

@Injectable()
export class ScryfallService {
  constructor(private httpService: HttpService) {}

  async sets(
    args?: {
      code?: string;
      scryfallId?: string;
      tcgPlayerId?: number;
    },
    params?: {
      format?: string;
      pretty?: boolean;
    }
  ) {
    let uri = '/sets';

    if (args?.code) {
      uri += '/' + args.code;
    }

    if (args?.scryfallId) {
      uri += '/' + args.scryfallId;
    }

    if (args?.tcgPlayerId) {
      uri += '/tcgplayer/' + args.tcgPlayerId;
    }

    return this.callScryfallApi(uri, params);
  }

  private async callScryfallApi(uri: string, params = {}) {
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
