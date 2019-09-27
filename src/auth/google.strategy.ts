import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService, ProviderName } from './auth.service';
import { PassportGoogle } from '../config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google')
{
    constructor( private readonly authService: AuthService ) {
        super( PassportGoogle );
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function )
    {
        try
        {
            const json = profile._json;
            // Logger.log(json);
            const jwt: string = await this.authService.checkAndSign(profile.id, json.email, ProviderName.GOOGLE );
            const user = { jwt, avatar: json.picture };
            done( null, user );

        }
        catch ( err )
        {
            // console.log(err)
            done(err, false);
        }
    }
}