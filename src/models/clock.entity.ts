import { Entity, Column, PrimaryColumn } from 'typeorm';

// Anviz - V_Reloj
/*
    CREATE VIEW [dbo].[V_Reloj] AS 
    SELECT [Clientid], [ClientName], [IPaddress], [ClientNumber], [CommPort]
    FROM [relojes].[dbo].[FingerClient]
*/
@Entity( {name: 'V_Reloj'} )
export class ClockEntity {

    @PrimaryColumn({ name: 'Clientid'})
    id: number;

    @Column({length: 50, name: 'ClientName'})
    name: string;

    @Column( {length: 255, name: 'IPaddress' } )
    ipAddress: string;

    @Column( { name: 'ClientNumber' } )
    order: number;

    @Column( { name: 'CommPort' } )
    port: number;

}
