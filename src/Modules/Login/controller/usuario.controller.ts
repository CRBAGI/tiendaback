import { BaseController } from "../../common/controller.commons";
import { BaseService } from "../../common/service.commons";
import { usuario } from "../entitys/usuario.entity";
import { usuarioService } from "../services/usuario.service";
import { InjectRepository } from '@nestjs/typeorm';

import { Controller, Post, Body } from '@nestjs/common';



@Controller('usuario')
export  class usuarioController extends BaseController<usuario> {
constructor(private readonly usuarioService:usuarioService,){
    super();
}
    
    
    @Post('Users')
    async create(@Body() usuario: usuario) : Promise<usuario> {
    const createdData = await this.getService().save(usuario);
    return createdData;
    }
    getService(): BaseService<usuario> {
        return this.usuarioService;
    }
  
   

}
