import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RrhhService } from './rrhh.service';
import { RrhhController } from './rrhh.controller';
import { RRHHEntity } from '../models/rrhh.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RRHHEntity]) ,
  ],
  controllers: [RrhhController],
  providers: [RrhhService],
  exports: [RrhhService]
})
export class RrhhModule {}
