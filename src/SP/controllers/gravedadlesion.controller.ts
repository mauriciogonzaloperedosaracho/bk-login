import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { GravedadlesionDto } from '../dtos/gravedadlesion.dto';
import { Gravedadlesion } from '../entities/gravedadlesion.entity';
import { GravedadlesionService } from '../services/gravedadlesion.service';

@Controller('gravedadlesion')
export class GravedadlesionController {
  @Inject(GravedadlesionService)
  private readonly service: GravedadlesionService;

  //Registrar Localización lesión
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: GravedadlesionDto): Promise<Gravedadlesion | never> {
    return this.service.register(body);
  }
  
  //Listar Todos los Localización Lesión
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.service.findAll();
  }

  //Listar un solo Localización Lesión
  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
  
  //Eliminación lógica de Localización Lesión
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
