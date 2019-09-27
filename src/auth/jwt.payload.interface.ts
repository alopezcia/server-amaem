import { UserEntity } from '../models/user.entity';

export interface JwtPayload {
    data: UserEntity;
    iat: number;
    exp: number;
    aud: string;
    iss: string;
    sub: string;
}