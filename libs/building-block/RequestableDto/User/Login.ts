import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserLogin {
  @ApiProperty({ description: 'email', default: 'john@als.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'password', default: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
