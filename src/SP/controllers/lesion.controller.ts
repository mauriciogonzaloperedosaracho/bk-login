import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject, Post, Param, Get } from '@nestjs/common';
import { LesionService } from '../services/lesion.service';

@Controller('api/lesion')
export class LesionController {
  constructor(private LesionService: LesionService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll(){
    return this.LesionService.findAll();
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() body: any){
    return this.LesionService.create(body);
  }

}
