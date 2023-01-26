import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class provedores{
    @PrimaryGeneratedColumn()
        IDProvedor: number;

    @Column()
    nombre: string;

    @Column()
    correo : string;

    @Column()
    contraseña : string;

    @Column()
    sexo : string;

    @Column()
    fechaDeNacimiento: Date;

    @Column()
    fotoDePerfil : string;

    
    


}