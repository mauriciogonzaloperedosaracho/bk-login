import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { MedicamentoDto } from '../dtos/medicamento.dto';
import { Medicamentos } from '../entities/medicamento.entity';
import { MedicamentoService } from '../services/medicamento.service';

@Controller('medicamentos')
export class MedicamentoController {
  @Inject(MedicamentoService)
  private readonly service: MedicamentoService;

  //Registrar Medicamentos
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: MedicamentoDto): Promise<Medicamentos | never> {
    return this.service.register(body);
  }
  
  //Listar Todos los Medicamentos
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.service.findAll();
  }

  //Listar un solo medicamento
  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
  
  //Eliminación lógica de Medicamentos
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
