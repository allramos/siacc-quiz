import { Injectable } from '@nestjs/common';
import { CreateAssuntDto } from './dto/create-assunt.dto';
import { UpdateAssuntDto } from './dto/update-assunt.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssuntService {

  constructor(private prisma: PrismaService){}

  create(createAssuntDto: CreateAssuntDto) {
    return 'This action adds a new assunt';
  }

  findAll() {
    return this.prisma.assunt.findMany();
  }

  findOne(id: number) {
    return this.prisma.assunt.findUnique({where:{id}});
  }

  update(id: number, updateAssuntDto: UpdateAssuntDto) {
    return this.prisma.assunt.update({
      where: {id},
      data: updateAssuntDto,
    });
  }

  remove(id: number) {
    return this.prisma.assunt.delete({where:{id}});
  }
}
