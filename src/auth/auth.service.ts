import { Injectable } from '@nestjs/common';

export enum ProviderName
{
    GOOGLE = 'google', MICROSOFT = 'microsoft'
}

@Injectable()
export class AuthService {

    async checkAndSign(thirdPartyId: string, email: string, provider: ProviderName ): Promise<string>
    {
        return null;
    }
}
