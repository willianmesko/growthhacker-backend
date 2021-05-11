
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import authConfig from './constants';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private jwtService: JwtService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('JWT token is missing.');
        }

        const [, token] = authHeader.split(' ');


        try {
            const decoded = await this.jwtService.verifyAsync(token, { secret: authConfig.jwt.secret });


            const { user } = decoded;

            req.user = user;



            next();
        } catch (err) {

            throw new UnauthorizedException('Inalid JWT token.');
        }

    }
}
