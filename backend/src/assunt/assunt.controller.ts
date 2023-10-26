import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssuntService } from './assunt.service';
import { CreateAssuntDto } from './dto/create-assunt.dto';
import { UpdateAssuntDto } from './dto/update-assunt.dto';

@Controller('assunt')
export class AssuntController {
  constructor(private readonly assuntService: AssuntService) {}

  @Post()
  create(@Body() createAssuntDto: CreateAssuntDto) {
    return this.assuntService.create(createAssuntDto);
  }

  @Get()
  findAll() {
    return this.assuntService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assuntService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssuntDto: UpdateAssuntDto) {
    return this.assuntService.update(+id, updateAssuntDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assuntService.remove(+id);
  }
}
