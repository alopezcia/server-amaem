import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserinfoEntity } from '../models/userinfo.entity';

@Injectable()
export class UserinfoService {
    constructor( @InjectConnection('sqlserver') private readonly sqlserverConnection: Connection ){}

    async getAll(): Promise<UserinfoEntity[]> {
        const repo = this.sqlserverConnection.getRepository(UserinfoEntity);
        return await repo.find();
    }
}
