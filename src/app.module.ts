import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RrhhModule } from './rrhh/rrhh.module';
import { SqlServerConn } from './config';
import { UserinfoModule } from './userinfo/userinfo.module';
import { ClockModule } from './clock/clock.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'amaem.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: [],
    }),

    TypeOrmModule.forRoot({
      ...SqlServerConn,
      name: 'sqlserver',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AuthModule,
    RrhhModule,
    UserModule,
    UserinfoModule,
    ClockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
