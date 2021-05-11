import { InternalServerErrorException, Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Attribute } from './attribute.entity';

@EntityRepository(Attribute)
export class AttributeRepository extends Repository<Attribute> {
    private readonly logger = new Logger(AttributeRepository.name);

    async findAll(): Promise<Attribute[]> {
        try {
            return await this.find();
        } catch (error) {
            this.logger.error("Fail to get eletronic")
            throw new InternalServerErrorException("Fail to get eletronic")
        }

    }


}
