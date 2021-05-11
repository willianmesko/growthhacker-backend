import {
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { Games } from './games.entity';
import { GamesRepository } from './games.repository';


@Injectable()
export class GamesService {
    private readonly logger = new Logger(GamesService.name);

    constructor(private readonly gamesRepository: GamesRepository) { }

    async get(): Promise<Games[]> {

        try {
            const games = await this.gamesRepository.findAll();
            if (!games[0]) {
                throw new NotFoundException("No games found")
            }
            return games;
        } catch (error) {
            this.logger.error("Error on get games ")
            throw error;
        }
    }
}