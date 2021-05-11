import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeRepository } from './attribute.repository';
import { AttributesService } from './eletronic.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([AttributeRepository]),
    ],

    providers: [AttributesService],
    exports: [AttributesService]

})
export class AttributeModule { }