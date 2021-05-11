import { Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { EletronicService } from './eletronic.service';

@Controller('eletronics')
export class EletronicController {
    constructor(private eletronicService: EletronicService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async get(@Res() res: Response) {
        const eletronics = await this.eletronicService.get();
        return res.send(eletronics)
    }

}
