import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/service.commons';
import { RegistroDto } from '../dto/registro.dto';
import { usuario } from '../entitys/usuario.entity';
import { usuarioRepository } from '../repository/usuario.repository';


@Injectable()
export class usuarioService {
    constructor
        (@InjectRepository(usuarioRepository)
        private usuarioRepository: usuarioRepository,
        ) {}
        async RegistroUsuario(RegistroUsuarioDto: RegistroDto): Promise<void>{
            return this.usuarioRepository.createUsuario(RegistroUsuarioDto);
        }


}
