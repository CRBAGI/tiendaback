import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/service.commons';
import { usuario } from '../entitys/usuario.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class usuarioService extends BaseService<usuario> {
    getRepository(): Repository<usuario> {
        throw new Error('Method not implemented.');
    }
    constructor( ){
        super();
    }

    
   


}
