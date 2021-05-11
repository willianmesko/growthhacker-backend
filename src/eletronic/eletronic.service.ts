import {
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { Eletronic } from './eletronic.entity';
import { EletronicRepository } from './eletronic.repository';

@Injectable()
export class EletronicService {
    private readonly logger = new Logger(EletronicRepository.name);

    constructor(private readonly eletronicRepository: EletronicRepository) { }

    async get(): Promise<Eletronic[]> {

        try {
            const eletronics = await this.eletronicRepository.findAll();
            if (!eletronics[0]) {
                throw new NotFoundException("No electronics found")
            }
            return eletronics;
        } catch (error) {
            this.logger.error("Error on get eletronic ")
            throw error;
        }
    }
}