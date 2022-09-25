import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { LocalizacionlesionDto } from '../dtos/localizacionlesion.dto';
import { Localizacionlesion } from '../entities/localizacionlesion.entity';
import { LocalizacionlesionService } from '../services/localizacionlesion.service';

@Controller('localizacionlesion')
export class LocalizacionlesionController {
  @Inject(LocalizacionlesionService)
  private readonly service: LocalizacionlesionService;

  //Registrar Localización lesión
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: LocalizacionlesionDto): Promise<Localizacionlesion | never> {
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
