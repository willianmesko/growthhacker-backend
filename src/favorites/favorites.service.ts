import {
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { CreateFavoritesDTO } from 'src/user/dto/create-favorites.dto';
import { Favorites } from './favorites.entity';
import { FavoritesRepository } from './favorites.repository';



@Injectable()
export class FavoritesService {
    private readonly logger = new Logger(FavoritesService.name);

    constructor(private readonly favoritesRepository: FavoritesRepository,) { }

    async create(createFavoritesDTO: CreateFavoritesDTO): Promise<Favorites> {

        try {
            return await this.favoritesRepository.createFavorite(createFavoritesDTO);


        } catch (error) {
            this.logger.error("Error on create favorites ")
            throw error;
        }
    }


    async get(userId: number): Promise<Favorites[]> {

        try {
            return await this.favoritesRepository.getFavoriteByUserId(userId);


        } catch (error) {
            this.logger.error("Error on create favorites ")
            throw error;
        }

    }



}