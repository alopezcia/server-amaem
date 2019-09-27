import { Controller, Get, UseGuards, Res, Req, Post, Body, Logger, Param, Render, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {

    @Get('google')
    @UseGuards(AuthGuard('google'))
    googleLogin()
    {
        // initiates the Google OAuth2 login flow
    }

    @Get('microsoft')
    @UseGuards(AuthGuard('azuread-openidconnect'))
    microsoftLogin()
    {
        // initiates the Microsoft OAuth2 login flow
    }

    // ------ Middleware Callbacks
    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req: Request, @Res() res: Response )
    {
        // handles the Google OAuth2 callback
        const user = req.user;
        Logger.log(user);
        res.status(HttpStatus.ACCEPTED).json('Ok Google');

/*        
        const jwt: string = req.user.jwt;
        if (jwt){
            res.redirect('/raspberry/auth/success/?token='+jwt+'&avatar='+req.user.avatar);
        }
        else {
//            res.redirect('/raspberry/login/failure');
            res.status(403).send('No token');
        }
*/
    }

    @Post('microsoft/callback')
    @UseGuards(AuthGuard('azuread-openidconnect'))
    microsoftCallback(@Req() req, @Res() res, @Body()  kkfu  ) 
    {
        const user = req.user;
        Logger.log(user);
        res.status(HttpStatus.ACCEPTED).json('Ok Microsoft');

/*
        const jwt: string = req.user.jwt;
        if (jwt){
            res.redirect('/raspberry/auth/success/?token='+jwt+'&avatar=img/avatar.jpg');
        }
        else {
            res.status(403).send('No token');
        }
*/        
    }

    @Get('checkJwt')
    @UseGuards(AuthGuard('jwt'))
    protectedResource(@Req() req)
    {
        return 'JWT is working! Id' + req.user.aud + ' - email: ' + req.user.sub  +' - ThirdId: ' + JSON.stringify(req.user.data); 
    }

}
