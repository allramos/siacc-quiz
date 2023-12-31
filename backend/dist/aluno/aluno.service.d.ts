import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AlunoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAlunoDto: CreateAlunoDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        turma: string;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        turma: string;
        pontuacao: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        turma: string;
        pontuacao: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateAlunoDto: UpdateAlunoDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        turma: string;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        turma: string;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
