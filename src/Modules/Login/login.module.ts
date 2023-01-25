import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarioController } from './controller/usuario.controller';
import { usuario } from './usuario.entity';
import { usuarioService } from './services/usuario.service';

@Module({
    imports : [TypeOrmModule.forFeature([usuario])],
    providers : [usuarioService,],
    controllers :[usuarioController],
})
export class usuarioModule {}
