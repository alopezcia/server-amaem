import { Module } from '@nestjs/common';
import { UserinfoController } from './userinfo.controller';
import { UserinfoService } from './userinfo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserinfoEntity } from '../models/userinfo.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ UserinfoEntity ]) ],
  controllers: [ UserinfoController ],
  providers: [ UserinfoService ]
})
export class UserinfoModule {}
