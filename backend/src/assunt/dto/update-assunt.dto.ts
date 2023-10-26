import { PartialType } from '@nestjs/mapped-types';
import { CreateAssuntDto } from './create-assunt.dto';

export class UpdateAssuntDto extends PartialType(CreateAssuntDto) {}
