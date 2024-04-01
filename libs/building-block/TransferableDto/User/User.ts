import { AutoMap } from '@automapper/classes';
import { ObjectId } from 'mongodb';

export class UserCompleteResponseDto {
  @AutoMap()
  _id: ObjectId;

  @AutoMap()
  email: string;

  @AutoMap()
  phone_number: string;

  @AutoMap()
  role: string;

  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  img_url: string;
}

export class UserCompleteResponsewithPasswordDto extends UserCompleteResponseDto {
  @AutoMap()
  password: string;
}
