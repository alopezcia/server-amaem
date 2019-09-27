import { Injectable, Logger} from '@nestjs/common';
import { PassportStrategy, PassportModule } from '@nestjs/passport';
import { OIDCStrategy } from 'passport-azure-ad';
import { AuthService, ProviderName } from './auth.service';
import { PassportMicrosoft } from '../config';

@Injectable()
export class MicrosoftStrategy extends PassportStrategy( OIDCStrategy, 'azuread-openidconnect')
{
    constructor( private readonly authService: AuthService ){
        super( PassportMicrosoft );
    }

    async validate( request: any, profile, done: Function )
    {
        try
        {
            const json = profile._json;
            Logger.log(json);
            const jwt: string = await this.authService.checkAndSign(profile.oid, json.email, ProviderName.MICROSOFT );
            const user = { jwt };
            done( null, user);
        }
        catch( err )
        {
            // console.log(err)
            done(err, false);
        }
    }

}