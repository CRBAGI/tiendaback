import { BaseController } from "../../common/controller.commons";
import { BaseService } from "../../common/service.commons";
import { usuario } from "../entitys/usuario.entity";
import { usuarioService } from "../services/usuario.service";
import { InjectRepository } from '@nestjs/typeorm';

import { Controller, Post, Body } from '@nestjs/common';
import { RegistroDto } from "../dto/registro.dto";



@Controller('usuario')
export class usuarioController {
    constructor(private usuarioService: usuarioService) { }

    @Post('/registro')
    registro(@Body() RegistroDto: RegistroDto): Promise<void> {
        return this.usuarioService.RegistroUsuario(RegistroDto);
    }
}
