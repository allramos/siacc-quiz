import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService],
  imports: [PrismaModule]
})
export class AlunoModule {}
