import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get, Delete } from '@nestjs/common';
import { JugadorService } from '../services/jugador.service';

@Controller('jugador')
export class JugadorController {
  constructor(private JugadorService: JugadorService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll(){
    return this.JugadorService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() body: any){
    return this.JugadorService.create(body);
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: number) {
    return this.JugadorService.findOne(id);
  }
  @Put(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: number, @Body() body: any) {
    return this.JugadorService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.JugadorService.remove(id);
  }
}
