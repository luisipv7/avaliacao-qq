import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetController } from './tweet/tweet.controller';
import { SeguidoresService } from './seguidores/seguidores.service';
import { SeguidoresController } from './seguidores/seguidores.controller';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioController } from './usuario/usuario.controller';
import { TweetModule } from './tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), UsuarioModule, TweetModule, SeguidoresModule],
  controllers: [AppController, UsuarioController, TweetController, SeguidoresController],
  providers: [AppService, SeguidoresService],
})
export class AppModule { }
