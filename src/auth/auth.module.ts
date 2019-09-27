import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy'; 
import { MicrosoftStrategy } from './microsoft.strategy'; 

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, JwtStrategy, MicrosoftStrategy]
})
export class AuthModule {}
