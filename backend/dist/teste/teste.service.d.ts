import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TesteService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TesteClient<{
        id: number;
        inicio: Date;
        fim: Date;
        quantidadeQuestoes: number;
        alunoId: number;
        assuntoId: number;
        pontuacao: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTesteDto: UpdateTesteDto): import(".prisma/client").Prisma.Prisma__TesteClient<{
        id: number;
        inicio: Date;
        fim: Date;
        quantidadeQuestoes: number;
        alunoId: number;
        assuntoId: number;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TesteClient<{
        id: number;
        inicio: Date;
        fim: Date;
        quantidadeQuestoes: number;
        alunoId: number;
        assuntoId: number;
        pontuacao: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
