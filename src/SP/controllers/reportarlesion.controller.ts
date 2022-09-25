import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { ReportarlesService } from '../services/reportarlesion.service';

@Controller('api/reportarlesion')
export class ReportarlesionController {
  constructor(private ReportarlesService: ReportarlesService) {}

  @Get()

  @UseInterceptors(ClassSerializerInterceptor)
  findAll(){
    return this.ReportarlesService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() body: any){
    return this.ReportarlesService.create(body);
  }

}
