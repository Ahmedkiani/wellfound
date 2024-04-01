import { HttpStatus } from '@nestjs/common';
import { SearchableDto } from 'wellfound/building-block/RequestableDto/searchable.dto';
import { UserCreator } from 'wellfound/building-block/RequestableDto/User/UserCreator';
import { UserPasswordUpdate } from 'wellfound/building-block/RequestableDto/User/UserPasswordUpdate';
import { UserUpdate } from 'wellfound/building-block/RequestableDto/User/UserUpdate';
import {
  UserCompleteResponseDto,
  UserCompleteResponsewithPasswordDto,
} from 'wellfound/building-block/TransferableDto/User/User';
import { UserPartialResponseDto } from 'wellfound/building-block/TransferableDto/User/UserPartial';
import { IGetAllResponse } from 'wellfound/building-block/utils/genericInterface';

export abstract class IUserService {
  abstract getAll(
    query?: SearchableDto,
  ): Promise<IGetAllResponse<UserPartialResponseDto>>;
  abstract create(
    wellfoundUserPayload: UserCreator,
  ): Promise<UserCompleteResponseDto>;
  abstract getById(id: string): Promise<UserCompleteResponseDto | null>;
  abstract update(
    id: string,
    updatePayloadDto: UserUpdate,
  ): Promise<UserCompleteResponseDto | null>;
  abstract findOne(
    conditions: Partial<Record<string, unknown>>,
  ): Promise<UserCompleteResponseDto | null>;
  abstract deleteAll(): Promise<void>;
  abstract userWithPassword(
    conditions: Partial<Record<string, unknown>>,
  ): Promise<UserCompleteResponsewithPasswordDto | null>;
  abstract dropDatabase(): Promise<void>;
  abstract deleteOne(id: string): Promise<HttpStatus>;
}
