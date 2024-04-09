import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/configuration';

@Module({
  imports: [UsersModule, ConfigModule.forRoot({
    envFilePath: ['.env.sample', '.env.development.local', '.env.production.local', '.env'],
    isGlobal: true,
    load: [config],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
