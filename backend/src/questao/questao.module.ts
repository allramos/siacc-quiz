import { Module } from '@nestjs/common';
import { QuestaoService } from './questao.service';
import { QuestaoController } from './questao.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [QuestaoController],
  providers: [QuestaoService],
  imports: [PrismaModule]
})
export class QuestaoModule {}
