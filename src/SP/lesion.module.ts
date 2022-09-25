import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LesionController } from './controllers/lesion.controller';
import { Lesion } from './entities/lesion.entity';


import { User } from '../auth/user.entity';
import { Reportarlesion } from './entities/reportarlesion.entity';
import { Posiblelesion } from './entities/posiblelesion.entity';
import { Gravedadlesion } from './entities/gravedadlesion.entity';
import { Tratamientolesion } from './entities/tratamientolesion.entity';

import { LesionService } from './services/lesion.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Lesion]), 
    TypeOrmModule.forFeature([User]), 
    TypeOrmModule.forFeature([Reportarlesion]),
    TypeOrmModule.forFeature([Posiblelesion]), 
    TypeOrmModule.forFeature([Gravedadlesion]),
    TypeOrmModule.forFeature([Tratamientolesion])
  ],
  controllers: [LesionController],
  providers: [LesionService],
})
export class LesionModule {}
