import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/service.commons';
import { usuario } from '../entitys/usuario.entity';


@Injectable()
export class usuarioService extends BaseService<usuario> {
    constructor(@InjectRepository(usuario) private usuarioRepo : Repository <usuario>){
        super()

    }
    getRepository(): Repository<usuario> {
        return this.usuarioRepo;
    }


}
