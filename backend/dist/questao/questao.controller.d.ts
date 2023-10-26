import { QuestaoService } from './questao.service';
import { CreateQuestaoDto } from './dto/create-questao.dto';
import { UpdateQuestaoDto } from './dto/update-questao.dto';
export declare class QuestaoController {
    private readonly questaoService;
    constructor(questaoService: QuestaoService);
    create(createQuestaoDto: CreateQuestaoDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        enun: string;
        gabarito: boolean;
        assuntoId: number;
        dificult: string;
        autorId: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__QuestaoClient<{
        id: number;
        enun: string;
        gabarito: boolean;
        assuntoId: number;
        dificult: string;
        autorId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateQuestaoDto: UpdateQuestaoDto): import(".prisma/client").Prisma.Prisma__QuestaoClient<{
        id: number;
        enun: string;
        gabarito: boolean;
        assuntoId: number;
        dificult: string;
        autorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__QuestaoClient<{
        id: number;
        enun: string;
        gabarito: boolean;
        assuntoId: number;
        dificult: string;
        autorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
