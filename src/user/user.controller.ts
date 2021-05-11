import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDTO } from './dto/create-user-body.dto';
import { UserService } from './user.service';
import { classToClass } from 'class-transformer';
import { RequestWithUser } from './dto/request-with-user.dto';
import { CreateFavoritesDTO } from './dto/create-favorites.dto';
import { CreateFavoritesBodyDTO } from './dto/create-favorites-body';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    async create(@Res() res: Response, @Body() body: CreateUserDTO) {
        const response = await this.userService.create(body);
        res.send(classToClass(response))
    }

    @Post('/favorites')
    @HttpCode(HttpStatus.OK)
    async createFavorites(@Res() res: Response, @Req() req: RequestWithUser, @Body() body: CreateFavoritesBodyDTO) {

        const response = await this.userService.createFavorites({
            ...body,
            userId: req.user.id,
        });

        res.send(classToClass(response));
    }

    @Get('/favorites')
    @HttpCode(HttpStatus.OK)
    async getFavorites(@Res() res: Response, @Req() req: RequestWithUser) {

        const response = await this.userService.getFavorites(req.user.id);

        res.send(classToClass(response));
    }



}
