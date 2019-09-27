import { Controller, Get, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { ClockService } from './clock.service';

@Controller('clock')
export class ClockController {
    constructor( private srv: ClockService ){}

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
