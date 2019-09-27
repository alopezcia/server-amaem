import { Module } from '@nestjs/common';
import { ClockController } from './clock.controller';
import { ClockService } from './clock.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClockEntity } from '../models/clock.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ ClockEntity ]) ],
  controllers: [ ClockController ],
  providers: [ ClockService ]
})
export class ClockModule {}
