import { Entity, Column, PrimaryColumn } from 'typeorm';

// Anviz - V_User
/*
    CREATE VIEW [dbo].[V_User] AS 
    SELECT Userinfo.Userid, Userinfo.UserCode, Userinfo.Name, Userinfo.Cardnum, Userinfo.Deptid
    FROM Userinfo
*/
@Entity( {name: 'V_User'} )
export class UserinfoEntity {

    @PrimaryColumn({length: 20, name: 'Userid'})
    userid: string;

    @Column({length: 20, name: 'UserCode'})
    usercode: string;

    @Column( {length: 50, name: 'Name' } )
    name: string;

    @Column( {length: 10, name: 'Cardnum' } )
    cardnum: string;

    @Column( { name: 'Deptid' } )
    deptid: number;

}
