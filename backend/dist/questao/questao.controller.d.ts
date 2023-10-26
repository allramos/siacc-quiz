import { QuestaoService } from './questao.service';
import { CreateQuestaoDto } from './dto/create-questao.dto';
import { UpdateQuestaoDto } from './dto/update-questao.dto';
export declare class QuestaoController {
    private readonly questaoService;
    constructor(questaoService: QuestaoService);
    create(createQuestaoDto: CreateQuestaoDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        enunciado: string;
        gabarito: boolean;
        assuntoId: number;
        dificuldade: number;
        autorId: number;
    }[]>;
    findOneRandom(): Promise<{
        id: number;
        enunciado: string;
        gabarito: boolean;
        assuntoId: number;
        dificuldade: number;
        autorId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        enunciado: string;
        gabarito: boolean;
        assuntoId: number;
        dificuldade: number;
        autorId: number;
    }>;
    update(id: string, updateQuestaoDto: UpdateQuestaoDto): import(".prisma/client").Prisma.Prisma__QuestaoClient<{
        id: number;
        enunciado: string;
        gabarito: boolean;
        assuntoId: number;
        dificuldade: number;
        autorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__QuestaoClient<{
        id: number;
        enunciado: string;
        gabarito: boolean;
        assuntoId: number;
        dificuldade: number;
        autorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
