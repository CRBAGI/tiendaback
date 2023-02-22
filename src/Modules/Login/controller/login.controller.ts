import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { BaseController } from "../../common/controller.commons";
import { BaseService } from "../../common/service.commons";
import { usuario } from "../entitys/usuario.entity";
import { usuarioService } from "../services/usuario.service";

@Controller('login')
export  class usuarioController extends BaseController<usuario> {
getService(): BaseService<usuario> {
    throw new Error('Method not implemented.');
}
constructor(private readonly usuarioService:usuarioService){
    super();
}

   
   
  
   

}
