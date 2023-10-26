import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfessorService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProfessorDto: CreateProfessorDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProfessorDto: UpdateProfessorDto): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
