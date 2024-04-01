import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserCreator {
  @ApiProperty({ description: 'email', default: 'john@als.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'password', default: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({ default: '89898898' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({ description: 'role' })
  @IsOptional()
  role: string;

  @ApiPropertyOptional({ default: 'john' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiPropertyOptional({ default: 'wick' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastName: string;
}
