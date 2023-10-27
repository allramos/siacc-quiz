import { TesteService } from './teste.service';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
export declare class TesteController {
    private readonly testeService;
    constructor(testeService: TesteService);
    create(createTesteDto: CreateTesteDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        inicio: Date;
        fim: Date;
        quantidadeQuestoes: number;
        alunoId: number;
        assuntoId: number;
        pontuacao: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TesteClient<{
        id: number;
        inicio: Date;
        fim: Date;
        quantidadeQuestoes: number;
        alunoId: number;
        assuntoId: number;
        pontuacao: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateTesteDto: UpdateTesteDto): import(".prisma/client").Prisma.Prisma__TesteClient<{
        id: number;
        inicio: Date;
        fim: Date;
        quantidadeQuestoes: number;
        alunoId: number;
        assuntoId: number;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TesteClient<{
        id: number;
        inicio: Date;
        fim: Date;
        quantidadeQuestoes: number;
        alunoId: number;
        assuntoId: number;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
