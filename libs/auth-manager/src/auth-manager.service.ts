import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserCompleteResponsewithPasswordDto } from 'wellfound/building-block/TransferableDto/User/User';
import {
  initWinston,
  winstonLogger,
} from 'wellfound/building-block/utils/winstonLogger';
import { UserModelDocument } from 'wellfound/manager/user/user.model';
import { IUserService } from 'wellfound/manager/user/user.service';

import { GenerateJWTTokenPayload } from './jwt.interface';

@Injectable()
export class AuthManagerService {
  constructor(
    private jwtService: JwtService,
    private userService: IUserService,
  ) {
    initWinston('apps/wellfound/logs');
  }

  /**
   * It runs when we hit login route.
   * @constructor
   * @param {string} email
   * @param {string} password
   */
  async validateUser(
    email: string,
    password: string,
  ): Promise<UserCompleteResponsewithPasswordDto | null> {
    const user = await this.userService.userWithPassword({
      email: email,
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      winstonLogger.infoLog.info(`User ${user.email} logged in`);
      return user;
    }

    return null;
  }

  // A utility function to generate JWT token
  async generateAccessToken(user: UserModelDocument) {
    const payload: GenerateJWTTokenPayload = {
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      img_url: user.img_url,
      sub: user._id,
    };

    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET ? process.env.JWT_SECRET : '',
      }),
    };
  }
}
