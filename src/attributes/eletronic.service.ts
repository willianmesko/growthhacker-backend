import {
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common'; import { Attribute } from './attribute.entity';
;
import { AttributeRepository } from './attribute.repository';

@Injectable()
export class AttributesService {
    private readonly logger = new Logger(AttributesService.name);

    constructor(private readonly attributesRepository: AttributeRepository) { }

    async get(): Promise<Attribute[]> {

        try {
            const eletronics = await this.attributesRepository.findAll();
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