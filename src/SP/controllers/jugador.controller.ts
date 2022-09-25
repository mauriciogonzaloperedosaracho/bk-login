import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { JugadorService } from '../services/jugador.service';

@Controller('api/jugador')
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

}
