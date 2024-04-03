import { Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { errorHandler } from 'wellfound/building-block/utils/errorHandler';

import { IDataService } from './data.service';

@Injectable()
export class DataManagerService
  extends AutomapperProfile
  implements IDataService
{
  constructor(@InjectMapper() readonly mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      //none found
    };
  }

  async getAll(category?: string, limit?: number) {
    try {
      let webUrl = 'https://api.publicapis.org/entries';

      if (category || limit) {
        webUrl += '?';
        if (category) {
          webUrl += `Category=${category}`;
        }
      }

      const response = await axios.get(webUrl);

      if (limit) {
        return response.data.entries.slice(0, limit);
      } else {
        return response.data;
      }
    } catch (error) {
      throw errorHandler(error);
    }
  }
}
