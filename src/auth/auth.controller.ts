import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthUserDTO } from './dto/auth-user.dto';
import { classToClass } from 'class-transformer';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('auth/login')
    async login(@Body() body: AuthUserDTO, @Res() res: Response) {
        const auth = await this.authService.login(body);

        res.send(classToClass(auth));
    }
}