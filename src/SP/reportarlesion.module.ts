import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportarlesionController } from './controllers/reportarlesion.controller';
import { Reportarlesion } from './entities/reportarlesion.entity';


import { Jugador } from './entities/jugador.entity';
import { Momentolesion } from './entities/momentolesion.entity';
import { Localizacionlesion } from './entities/localizacionlesion.entity';
import { Causalesion } from './entities/causalesion.entity';

import { ReportarlesService } from './services/reportarlesion.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Reportarlesion]), 
    TypeOrmModule.forFeature([Jugador]), 
    TypeOrmModule.forFeature([Momentolesion]),
    TypeOrmModule.forFeature([Localizacionlesion]), 
    TypeOrmModule.forFeature([Causalesion])
  ],
  controllers: [ReportarlesionController],
  providers: [ReportarlesService],
})
export class ReportarlesionModule {}
