import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AlunoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAlunoDto: CreateAlunoDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateAlunoDto: UpdateAlunoDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
