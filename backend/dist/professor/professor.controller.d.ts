import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
export declare class ProfessorController {
    private readonly professorService;
    constructor(professorService: ProfessorService);
    create(createProfessorDto: CreateProfessorDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProfessorDto: UpdateProfessorDto): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProfessorClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
