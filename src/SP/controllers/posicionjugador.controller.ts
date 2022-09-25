import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { PosicionjugadorDto } from '../dtos/posicionjugador.dto';
import { Posicionjugador } from '../entities/posicionjugador.entity';
import { PosicionjugadorService } from '../services/posicionjugador.service';

@Controller('posicionjugador')
export class PosicionjugadorController {
  @Inject(PosicionjugadorService)
  private readonly service: PosicionjugadorService;

  //Registrar Momento lesión
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: PosicionjugadorDto): Promise<Posicionjugador | never> {
    return this.service.register(body);
  }
  
  //Listar Todos los Momento Lesión
  @Get()
 // @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.service.findAll();
  }

  //Listar un solo Momento Lesión
  @Get(':idposicion')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('idposicion') idposicion: number) {
    return this.service.findOne(idposicion);
  }
  
  //Eliminación lógica de Momento Lesión
  @Put(':idposicion')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('idposicion') idposicion: number, @Body() body: any) {
    return this.service.update(idposicion, body);
  }

  @Put('delete/:idposicion')
  @UseInterceptors(ClassSerializerInterceptor)
  updatee(@Param('idposicion') idposicion: number, @Body() body: any) {
    return this.service.updatee(idposicion, body);
  }

}
