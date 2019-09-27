import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserinfoService } from './userinfo.service';
import { Response } from 'express';

@Controller('userinfo')
export class UserinfoController {
    constructor( private srv: UserinfoService ){}

    // TODO - Este método anularlo, o protegerlo mas adelante

    @Get()
    @UseGuards(AuthGuard('jwt'))
    getAll( @Res() response: Response ){
        this.srv.getAll().then( list => {
            response.status(HttpStatus.OK).json( list );
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'algo ocurrio'});
        });
    }
}
