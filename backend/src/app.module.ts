import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProfessorModule } from './professor/professor.module';
import { AlunoModule } from './aluno/aluno.module';
import { QuestaoModule } from './questao/questao.module';
import { AssuntoModule } from './assunto/assunto.module';
import { TesteModule } from './teste/teste.module';

@Module({
  imports: [PrismaModule, ProfessorModule, AlunoModule, QuestaoModule, AssuntoModule, TesteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
