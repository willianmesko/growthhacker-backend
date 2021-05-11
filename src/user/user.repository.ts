import { InternalServerErrorException, Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user-body.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    private readonly logger = new Logger(UserRepository.name);

    async findByEmail(email: string): Promise<User> {
        try {

            return await this.findOne({ where: { email } });


        } catch (error) {
            this.logger.error("Fail to get user")
            throw new InternalServerErrorException("Fail to get user")
        }

    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        try {

            const user = this.create(createUserDTO);

            return this.save(user);
        } catch (error) {
            this.logger.error("Fail to create user")
            throw new InternalServerErrorException("Fail to create user")
        }
    }


}
