import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}

    async getAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async getUserByName( username: string ): Promise<UserEntity>
    {
        const user = await this.userRepository.findOne( { username } );
        return user;
    }

    async getUserByEmail( email: string ): Promise<UserEntity>
    {
        const user = await this.userRepository.findOne( {where: {email}} );
        return user;
    }

    async saveUser( user: UserEntity ): Promise<UserEntity>
    {
        return this.userRepository.save( user );
    }
}
