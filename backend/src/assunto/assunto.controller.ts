import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssuntoService } from './assunto.service';
import { CreateAssuntoDto } from './dto/create-assunto.dto';
import { UpdateAssuntoDto } from './dto/update-assunto.dto';

@Controller('assunto')
export class AssuntoController {
  constructor(private readonly assuntoService: AssuntoService) {}

  @Post()
  create(@Body() createAssuntDto: CreateAssuntoDto) {
    return this.assuntoService.create(createAssuntDto);
  }

  @Get()
  findAll() {
    return this.assuntoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assuntoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssuntDto: UpdateAssuntoDto) {
    return this.assuntoService.update(+id, updateAssuntDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assuntoService.remove(+id);
  }
}
