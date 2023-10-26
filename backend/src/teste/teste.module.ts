import { Module } from '@nestjs/common';
import { TesteService } from './teste.service';
import { TesteController } from './teste.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TesteController],
  providers: [TesteService],
  imports: [PrismaModule]
})
export class TesteModule {}
