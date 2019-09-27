import { Controller, Get, Res, HttpStatus, Logger, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RrhhService } from './rrhh.service';
import { Response } from 'express';

@Controller('rrhh')
export class RrhhController {

    constructor( private srv: RrhhService ){}

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
