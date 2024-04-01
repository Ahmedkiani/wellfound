import { IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';

export class UserAssignedToRequest {
  userId: ObjectId;
  role: string;
}

export class GenerateJWTTokenPayload {
  @IsString()
  role: string;
  firstName: string;
  lastName: string;
  img_url: string;
  sub: ObjectId;
}

export class TokenPayloadDecodedByPassport extends GenerateJWTTokenPayload {
  @IsNumber()
  iat: string;
  @IsNumber()
  exp: string;
}
