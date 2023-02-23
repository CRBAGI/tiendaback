import { EntityRepository, Repository } from "typeorm";
import { usuario } from "../entitys/usuario.entity";
import { RegistroDto } from "../dto/registro.dto";


@EntityRepository(usuario)
export class usuarioRepository extends Repository<usuario> {
       async createUsuario(RegistroUsuarioDto: RegistroDto): Promise<void>{
        const{nombre, email, password, rol, sexo, fechaDeNacimiento, fotoDePerfil}=RegistroUsuarioDto;
        const usuario= this.create({nombre, email, password, rol, sexo, fechaDeNacimiento, fotoDePerfil});
await this.save(usuario);
       }
}









