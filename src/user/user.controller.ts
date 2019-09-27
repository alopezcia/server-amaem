import { Controller, Get, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {

    constructor(private srv: UserService ){}

    // TODO - Este método anularlo, o protegerlo mas adelante
    @Get()
    @UseGuards(AuthGuard('jwt'))
    getAll(@Res() response){
        this.srv.getAll().then( list => {
            response.status(HttpStatus.OK).json( list );
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'algo ocurrio'});
        });
    }
}
