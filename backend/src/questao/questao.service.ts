import { Injectable } from '@nestjs/common';
import { CreateQuestaoDto } from './dto/create-questao.dto';
import { UpdateQuestaoDto } from './dto/update-questao.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable()
export class QuestaoService {

  constructor(private prisma: PrismaService) { }

  create(createQuestaoDto: CreateQuestaoDto) {
    return 'This action adds a new questao';
  }

  findAll() {
    return this.prisma.questao.findMany();
  }

  findOne(id: number) {
    return this.prisma.questao.findUnique({ where: { id } });
  }

  async findOneRandom() {

    const questaosCount = await this.prisma.questao.count();
    const skip = Math.floor(Math.random() * questaosCount);

    return await this.prisma.questao.findMany({
      take: 1,
      skip: skip,
      orderBy: {
        enunciado: 'desc',
      },
    });
  }

  update(id: number, updateQuestaoDto: UpdateQuestaoDto) {
    return this.prisma.questao.update({
      where: { id },
      data: updateQuestaoDto,
    });
  }

  remove(id: number) {
    return this.prisma.questao.delete({ where: { id } });;
  }
}
