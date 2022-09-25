import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { MomentolesionDto } from '../dtos/momentolesion.dto';
import { Momentolesion } from '../entities/momentolesion.entity';
import { MomentolesionService } from '../services/momentolesion.service';

@Controller('momentolesion')
export class MomentolesionController {
  @Inject(MomentolesionService)
  private readonly service: MomentolesionService;

  //Registrar Momento lesión
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: MomentolesionDto): Promise<Momentolesion | never> {
    return this.service.register(body);
  }
  
  //Listar Todos los Momento Lesión
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.service.findAll();
  }

  //Listar un solo Momento Lesión
  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
  
  //Eliminación lógica de Momento Lesión
  @Put(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: number, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Put('delete/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  updatee(@Param('id') id: number, @Body() body: any) {
    return this.service.updatee(id, body);
  }

}
