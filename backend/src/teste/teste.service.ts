import { Injectable } from '@nestjs/common';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TesteService {

  constructor(private prisma: PrismaService){}

  create(createTesteDto: CreateTesteDto) {
    return 'This action adds a new teste';
  }

  findAll() {
    return this.prisma.teste.findMany();
  }

  findOne(id: number) {
    return this.prisma.teste.findUnique({where:{id}});
  }

  update(id: number, updateTesteDto: UpdateTesteDto) {
    return this.prisma.teste.update({
      where: {id},
      data: updateTesteDto,
    });
  }

  remove(id: number) {
    return this.prisma.teste.delete({where:{id}});
  }
}
