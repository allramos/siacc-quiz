import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlunoService {

  constructor(private prisma: PrismaService){}
  
  create(createAlunoDto: CreateAlunoDto) {
    return 'This action adds a new aluno';
  }

  findAll() {
    return this.prisma.aluno.findMany();
  }

  findOne(id: number) {
    return this.prisma.aluno.findUnique({where: {id}});
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return this.prisma.aluno.update({
      where: {id},
      data: updateAlunoDto,
    });
  }

  remove(id: number) {
    return this.prisma.aluno.delete({where: {id}});
  }
}
