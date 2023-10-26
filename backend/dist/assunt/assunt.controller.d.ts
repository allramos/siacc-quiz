import { AssuntService } from './assunt.service';
import { CreateAssuntDto } from './dto/create-assunt.dto';
import { UpdateAssuntDto } from './dto/update-assunt.dto';
export declare class AssuntController {
    private readonly assuntService;
    constructor(assuntService: AssuntService);
    create(createAssuntDto: CreateAssuntDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AssuntClient<{
        id: number;
        nome: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateAssuntDto: UpdateAssuntDto): import(".prisma/client").Prisma.Prisma__AssuntClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AssuntClient<{
        id: number;
        nome: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
