import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PosiblelesionDto } from '../dtos/posiblelesion.dto';
import { Posiblelesion } from '../entities/posiblelesion.entity';
import { PosiblelesionService } from '../services/posiblelesion.service';

@Controller('posiblelesion')
export class PosiblelesionController {
  @Inject(PosiblelesionService)
  private readonly service: PosiblelesionService;

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: PosiblelesionDto): Promise<Posiblelesion | never> {
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
