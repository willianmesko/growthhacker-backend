import { Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private gamesService: GamesService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async get(@Res() res: Response) {
        const games = await this.gamesService.get();
        return res.send(games)
    }

}
