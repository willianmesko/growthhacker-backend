import { Module } from '@nestjs/common';
import { EletronicController } from './eletronic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EletronicRepository } from './eletronic.repository';
import { EletronicService } from './eletronic.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([EletronicRepository]),
    ],
    controllers: [EletronicController],
    providers: [EletronicService],
    exports: [EletronicService]

})
export class EletronicModule { }