import { Column, Entity,PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
export class usuario{

    @Column()
    nombre: string;

    @Column(Unique)
    correo : string;

    @Column()
    contraseña : string;

    @Column()
    rol : string;

    @Column()
    sexo : string;

    @Column()
    FechaDeNacimiento: Date;

    @Column()
    fotoDePerfil : string;

    @PrimaryGeneratedColumn()
    IDUsario: number;


}