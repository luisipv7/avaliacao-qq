import { Injectable } from '@nestjs/common';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';

@Injectable()
export class SeguidoresService {
  create(createSeguidoreDto: CreateSeguidoreDto) {
    return 'This action adds a new seguidore';
  }

  findAll() {
    return `This action returns all seguidores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seguidore`;
  }

  update(id: number, updateSeguidoreDto: UpdateSeguidoreDto) {
    return `This action updates a #${id} seguidore`;
  }

  remove(id: number) {
    return `This action removes a #${id} seguidore`;
  }
}
