import { Injectable } from '@nestjs/common';
import { CreateAssuntoDto } from './dto/create-assunto.dto';
import { UpdateAssuntoDto } from './dto/update-assunto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssuntoService {

  constructor(private prisma: PrismaService){}

  create(createAssuntoDto: CreateAssuntoDto) {
    return 'This action adds a new assunto';
  }

  findAll() {
    return this.prisma.assunto.findMany();
  }

  findOne(id: number) {
    return this.prisma.assunto.findUnique({where:{id}});
  }

  update(id: number, updateAssuntDto: UpdateAssuntoDto) {
    return this.prisma.assunto.update({
      where: {id},
      data: updateAssuntDto,
    });
  }

  remove(id: number) {
    return this.prisma.assunto.delete({where:{id}});
  }
}
