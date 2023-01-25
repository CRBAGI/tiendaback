import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class usuario{

    @Column()
    nombre: string;

    @Column()
    correo : string;

    @Column()
    contraseña : string;

    @Column()
    rol : string;

    @Column()
    sexo : string;

    @Column()
    fechaDeNacimiento: Date;

    
    @PrimaryGeneratedColumn()
    IDUsario: number;


}