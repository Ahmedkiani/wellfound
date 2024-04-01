import { AutoMap } from '@automapper/classes';
import { ObjectId } from 'mongodb';

export class UserPartialResponseDto {
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
  full_name: string;

  @AutoMap()
  img_url: string;
}
