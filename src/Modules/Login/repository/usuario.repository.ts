import { EntityRepository, Repository } from "typeorm";
import { usuario } from "../entitys/usuario.entity";
import { RegistroDto } from "../dto/registro.dto";


@EntityRepository(usuario)
export class usuarioRepository extends Repository<usuario> {
        async createUsuario(RegistroDto: RegistroDto): Promise<void> {
                const { nombre, email, password, rol, sexo, fechaDeNacimiento, fotoDePerfil } = RegistroDto;
                const usuario = this.create({ nombre, email, password, rol, sexo, fechaDeNacimiento, fotoDePerfil });
                await this.save(usuario);
        }
}









