import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity( {name: 'rrhh'} )
export class RRHHEntity {
    @PrimaryColumn()
    id: number;

    @Column({length: 30})
    nombre: string;

    @Column({length: 50})
    apellidos: string;

    @Column({length: 60 , nullable: true})
    email: string;

    @Column()
    fechaAlta: Date;

    @Column({length: 36})
    ubicacion: string;

    @Column({length: 42})
    puesto: string;

    @Column({length: 60})
    funcion: string;

}
