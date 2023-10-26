import { CreateAssuntDto } from './dto/create-assunt.dto';
import { UpdateAssuntDto } from './dto/update-assunt.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AssuntService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAssuntDto: CreateAssuntDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AssuntClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateAssuntDto: UpdateAssuntDto): import(".prisma/client").Prisma.Prisma__AssuntClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AssuntClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
