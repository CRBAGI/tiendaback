import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class productos{

    @PrimaryGeneratedColumn()
    IDProducto: number;

    @Column()
    IDProvedor: number;

    @Column()
    Marca : string;

    @Column()
    Nombre: string;

    @Column()
    Precio : number;

    @Column()
    Descripcion : string;

    @Column()
    cantidad : number;

    @Column()
    categoria : string;

    @Column()
    fotos: number;


}