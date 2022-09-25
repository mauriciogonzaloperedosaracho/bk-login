import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { TratamientolesionDto } from '../dtos/tratamientolesion.dto';
import { Tratamientolesion } from '../entities/tratamientolesion.entity';
import { TratamientolesionService } from '../services/tratamientolesion.service';

@Controller('tratamientolesion')
export class TratamientolesionController {
  @Inject(TratamientolesionService)
  private readonly service: TratamientolesionService;

  //Registrar Momento lesión
  @Post()

  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: TratamientolesionDto): Promise<TratamientolesionDto | never> {
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
