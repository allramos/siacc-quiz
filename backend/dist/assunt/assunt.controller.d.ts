import { AssuntService } from './assunt.service';
import { CreateAssuntDto } from './dto/create-assunt.dto';
import { UpdateAssuntDto } from './dto/update-assunt.dto';
export declare class AssuntController {
    private readonly assuntService;
    constructor(assuntService: AssuntService);
    create(createAssuntDto: CreateAssuntDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateAssuntDto: UpdateAssuntDto): any;
    remove(id: string): any;
}
