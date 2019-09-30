import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import { ExpressSessionParms } from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Proxy - deben estar definidas las variables 
  const globalTunnel = require('global-tunnel-ng');
  globalTunnel.initialize();
  if ( globalTunnel.isProxying ){
    Logger.log( 'Using Proxy at ' + globalTunnel.proxyUrl );
  }

  // El proveedor de Microsoft necesita una session 
  app.use(session(ExpressSessionParms));

  app.use(passport.initialize());
  app.use(passport.session());

  // o necesita cookie-parser
  app.use(cookieParser());

  // Activar CORS
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
