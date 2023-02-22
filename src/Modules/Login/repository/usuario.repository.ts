import {Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { usuario } from "../entitys/usuario.entity";
import { RegistroUsuarioDto } from "../dto/usuario-registro.dto";




export class usuarioRepository {
constructor(@InjectRepository(usuario) private usuarioRepo : Repository <usuario>){
        }

       

}





