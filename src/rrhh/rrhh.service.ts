import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { RRHHEntity } from '../models/rrhh.entity';

@Injectable()
export class RrhhService {
    constructor(
            @InjectConnection('default') private readonly sqliteConnection: Connection,
//            @InjectConnection('sqlserver') private readonly sqlserverConnection: Connection,
    ){}

// NOTA Importante: InjectRepository no admite att. name, por lo que jhay que obtener el repositorio 
// a partir de la conexión.
//        @InjectRepository(RRHHEntity) private readonly rrhhRepository: Repository<RRHHEntity>){}

    async getAll(): Promise<RRHHEntity[]> {
        const repo = this.sqliteConnection.getRepository(RRHHEntity);
        return await repo.find();
    }

/*
    async dump(): Promise<RRHHEntity[]> {
        const repoLite = this.sqliteConnection.getRepository(RRHHEntity);
        const list: RRHHEntity[] = await repoLite.find();

        const repoSql = this.sqlserverConnection.getRepository(RRHHEntity);
        return await repoSql.save( list );
    }
*/
}
