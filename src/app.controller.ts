import { Controller, Get, Req, Res, Logger, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) {}
/*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
*/
  @Get()
  root(@Req() req: Request, @Res() res: Response) {
    Logger.log(req.cookies['the-secret-winner']);
    if ( req.query.token ){
      // Redirigir a la entrada con el token metido en el header
    }
    if ( req.headers.host === 'www.servicios-amaem.es' ) {
      res.redirect('https://www.servicios-amaem.es');
    } else {
        res.status(HttpStatus.ACCEPTED).json('Ok');
    }
  }

}
