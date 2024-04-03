import { HttpStatus } from '@nestjs/common';

export abstract class IDataService {
  abstract getAll(category?: string, limit?: number): Promise<any>;
}
