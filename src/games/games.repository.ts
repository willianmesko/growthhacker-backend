import { InternalServerErrorException, Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Games } from './games.entity';

@EntityRepository(Games)
export class GamesRepository extends Repository<Games> {
    private readonly logger = new Logger(GamesRepository.name);

    async findAll(): Promise<Games[]> {
        try {
            return await this.find();
        } catch (error) {
            this.logger.error("Fail to get games")
            throw new InternalServerErrorException("Fail to get games")
        }

    }


}
