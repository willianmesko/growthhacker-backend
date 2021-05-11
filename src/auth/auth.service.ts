import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import authConfig from './constants';
import { ResponseAuthUser } from './dto/response-auth-user';
import { AuthUserDTO } from './dto/auth-user.dto';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async login({ email, password }: AuthUserDTO): Promise<ResponseAuthUser> {
        const user = await this.usersService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Account was not found');
        }
        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new UnauthorizedException('Incorrect email/password combination.');
        }

        delete user.password;
        const token = this.jwtService.sign({ user }, { secret: authConfig.jwt.secret, expiresIn: authConfig.jwt.expiresIn })

        return {
            token,
            user
        }
    }

}