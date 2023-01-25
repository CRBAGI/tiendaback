import { Controller } from "@nestjs/common/decorators";
import { BaseController } from "../common/controller.commons";
import { BaseService } from "../common/service.commons";
import { usuario } from "../usuario.entity";
import { usuarioService } from "../services/usuario.service";

@Controller('usuario')
export  class usuarioController extends BaseController<usuario> {
constructor(private readonly usuarioService:usuarioService){
    super();
}

    getService(): BaseService<usuario> {
        return this.usuarioService;
    }
  
   

}
