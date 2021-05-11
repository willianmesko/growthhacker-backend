import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesRepository } from './favorites.repository';
import { FavoritesService } from './favorites.service';



@Module({
    imports: [
        TypeOrmModule.forFeature([FavoritesRepository]),
    ],
    providers: [FavoritesService],
    exports: [FavoritesService],
})
export class FavoritesModule { }