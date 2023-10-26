import { Module } from '@nestjs/common';
import { AssuntService } from './assunt.service';
import { AssuntController } from './assunt.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AssuntController],
  providers: [AssuntService],
  imports: [PrismaModule],
})
export class AssuntModule {}
