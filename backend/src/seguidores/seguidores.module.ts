import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguidore } from './entities/seguidore.entity';
import { SeguidoresController } from './seguidores.controller';
import { SeguidoresService } from './seguidores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seguidore])],
  controllers: [SeguidoresController],
  providers: [SeguidoresService],
  exports: [TypeOrmModule, SeguidoresService]
})
export class SeguidoresModule { }
