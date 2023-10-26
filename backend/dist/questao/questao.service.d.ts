import { CreateQuestaoDto } from './dto/create-questao.dto';
import { UpdateQuestaoDto } from './dto/update-questao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class QuestaoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createQuestaoDto: CreateQuestaoDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        enun: string;
        gabarito: boolean;
        assuntoId: number;
        dificult: string;
        autorId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__QuestaoClient<{
        id: number;
        enun: string;
        gabarito: boolean;
        assuntoId: number;
        dificult: string;
        autorId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateQuestaoDto: UpdateQuestaoDto): import(".prisma/client").Prisma.Prisma__QuestaoClient<{
        id: number;
        enun: string;
        gabarito: boolean;
        assuntoId: number;
        dificult: string;
        autorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__QuestaoClient<{
        id: number;
        enun: string;
        gabarito: boolean;
        assuntoId: number;
        dificult: string;
        autorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
