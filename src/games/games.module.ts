import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesRepository } from './games.repository';
import { GamesService } from './games.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([GamesRepository]),
    ],
    controllers: [GamesController],
    providers: [GamesService],
    exports: [GamesService]

})
export class GamesModule { }