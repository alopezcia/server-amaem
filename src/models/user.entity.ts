import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity( {name: 'user'} )
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30, name: "userName"})
    username: string;

    @Column({length: 64})
    password: string;

    @Column({length: 255})
    email: string;

    @Column({length: 15, nullable: true})
    phone: string;

    @Column({length: 255})
    nameLarge: string;

    @Column({length: 128, nullable: true})
    thirdPartyId: string;

    @Column()
    domainUser: boolean;

    @Column()
    singleLogon: boolean;

    @Column()
    active: boolean;

}
