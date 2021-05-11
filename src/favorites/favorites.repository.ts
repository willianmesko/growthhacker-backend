import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateFavoritesDTO } from 'src/user/dto/create-favorites.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Favorites } from './favorites.entity';


@EntityRepository(Favorites)
export class FavoritesRepository extends Repository<Favorites> {
    private readonly logger = new Logger(FavoritesRepository.name);

    async getFavoriteByUserId(userId: number): Promise<Favorites[]> {
        try {
            return await this.find({ where: { userId }, relations: ['eletronics'] });
        } catch (error) {
            this.logger.error("Fail to get favorites")
            throw new InternalServerErrorException("Fail to get favorites")
        }

    }

    async createFavorite(createFavoritesDTO: CreateFavoritesDTO): Promise<Favorites> {

        try {
            const favorite = await this.create(createFavoritesDTO);

            return this.save(favorite)
        } catch (error) {
            this.logger.error("Fail to create favorites")
            throw new InternalServerErrorException("Fail to create favorites")
        }

    }


}
