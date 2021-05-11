import {

    BadRequestException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { hash } from 'bcryptjs';
import { Favorites } from 'src/favorites/favorites.entity';
import { FavoritesService } from 'src/favorites/favorites.service';
import { CreateFavoritesDTO } from './dto/create-favorites.dto';
import { CreateUserDTO } from './dto/create-user-body.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';


@Injectable()
export class UserService {
    private readonly logger = new Logger(UserService.name);

    constructor(
        private readonly userRepository: UserRepository,
        private readonly favoritesService: FavoritesService
    ) { }

    async findByEmail(email: string): Promise<User> {

        try {
            const user = await this.userRepository.findByEmail(email);

            return user;
        } catch (error) {
            this.logger.error("Error on get user ")
            throw error;
        }
    }

    async create({ name, email, password }: CreateUserDTO): Promise<User> {
        try {
            let user: User;
            user = await this.findByEmail(email);

            if (user) {
                throw new BadRequestException("User already exist")
            }

            user = await this.userRepository.createUser(
                { name, email, password: await hash(password, 8) }
            )

            return user;
        } catch (error) {
            this.logger.error("Error on create user ")

            throw new InternalServerErrorException(error);
        }

    }

    async createFavorites(createFavoritesDTO: CreateFavoritesDTO): Promise<Favorites> {

        const favorites = await this.favoritesService.create(createFavoritesDTO);

        return favorites;

    }

    async getFavorites(userId: number): Promise<Favorites[]> {
        return await this.favoritesService.get(userId);


    }



}