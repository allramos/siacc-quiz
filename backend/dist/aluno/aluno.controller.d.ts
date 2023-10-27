import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunoController {
    private readonly alunoService;
    constructor(alunoService: AlunoService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        turma: string;
        pontuacao: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateAlunoDto: UpdateAlunoDto): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        turma: string;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AlunoClient<{
        id: number;
        nome: string;
        turma: string;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
