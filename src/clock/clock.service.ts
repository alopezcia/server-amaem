import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ClockEntity } from '../models/clock.entity';

@Injectable()
export class ClockService {
    constructor( @InjectConnection('sqlserver') private readonly sqlserverConnection: Connection ){}

    async getAll(): Promise<ClockEntity[]> {
        const repo = this.sqlserverConnection.getRepository(ClockEntity);
        return await repo.find();
    }

}
