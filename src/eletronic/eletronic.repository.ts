import { InternalServerErrorException, Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Eletronic } from './eletronic.entity';

@EntityRepository(Eletronic)
export class EletronicRepository extends Repository<Eletronic> {
    private readonly logger = new Logger(EletronicRepository.name);

    async findAll(): Promise<Eletronic[]> {
        try {
            return await this.find();
        } catch (error) {
            this.logger.error("Fail to get eletronic")
            throw new InternalServerErrorException("Fail to get eletronic")
        }

    }


}
