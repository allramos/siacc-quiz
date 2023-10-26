import { PartialType } from '@nestjs/mapped-types';
import { CreateAssuntoDto } from './create-assunto.dto';

export class UpdateAssuntoDto extends PartialType(CreateAssuntoDto) {}
