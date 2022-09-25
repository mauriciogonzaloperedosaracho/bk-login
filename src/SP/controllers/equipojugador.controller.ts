import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { EquipojugadorDto } from '../dtos/Equipojugador.dto';
import { Equipojugador } from '../entities/equipojugador.entity';
import { EquipojugadorService } from '../services/equipojugador.service';

@Controller('equipojugador')
export class EquipojugadorController {
  @Inject(EquipojugadorService)
  private readonly service: EquipojugadorService;

  //Registrar Momento lesión
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: EquipojugadorDto): Promise<Equipojugador | never> {
    return this.service.register(body);
  }
  
  //Listar Todos los Momento Lesión
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.service.findAll();
  }

  //Listar un solo Momento Lesión
  @Get(':idequipo')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('idequipo') id: number) {
    return this.service.findOne(id);
  }
  
  //Eliminación lógica de Momento Lesión
  @Put(':idequipo')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: number, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Put('delete/:idequipo')
  @UseInterceptors(ClassSerializerInterceptor)
  updatee(@Param('id') id: number, @Body() body: any) {
    return this.service.updatee(id, body);
  }

}
