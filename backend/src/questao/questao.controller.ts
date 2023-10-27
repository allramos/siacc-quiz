import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestaoService } from './questao.service';
import { CreateQuestaoDto } from './dto/create-questao.dto';
import { UpdateQuestaoDto } from './dto/update-questao.dto';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@Controller('questao')
export class QuestaoController {

  @WebSocketServer() 
  server = new Server();
  

  constructor(private readonly questaoService: QuestaoService) {
    this.server.listen(3003, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PATCH'],
        // transports: ['websocket', 'polling'],
        credentials: false,
      },
      allowEIO3: true,
    })
   }

  @Post()
  create(@Body() createQuestaoDto: CreateQuestaoDto) {
    return this.questaoService.create(createQuestaoDto);
  }

  @Get()
  findAll() {
    return this.questaoService.findAll();
  }

  @Get('random')
  async findOneRandom() {
    return await this.questaoService.findOneRandom();
  }

  @Get('true')
  replyTrue() {
    const message = true;
    this.server.emit('message', message); // Emita a mensagem via socket com o nome 'message'
    return { success: true };
  }

  @Get('false')
  replyFalse() {
    const message = false
    this.server.emit('message', message); // Emita a mensagem via socket com o nome 'message'
    return { success: true };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.questaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestaoDto: UpdateQuestaoDto) {
    return this.questaoService.update(+id, updateQuestaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questaoService.remove(+id);
  }
}
