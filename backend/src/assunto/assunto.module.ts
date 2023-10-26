import { Module } from '@nestjs/common';
import { AssuntoService } from './assunto.service';
import { AssuntoController } from './assunto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AssuntoController],
  providers: [AssuntoService],
  imports: [PrismaModule],
})
export class AssuntoModule {}
