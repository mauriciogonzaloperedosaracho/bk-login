import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorController } from './controllers/jugador.controller';
import { Equipojugador } from './entities/equipojugador.entity';
import { Jugador } from './entities/jugador.entity';
import { Posicionjugador } from './entities/posicionjugador.entity';
import { JugadorService } from './services/jugador.service';


@Module({
  imports: [TypeOrmModule.forFeature([Jugador]), TypeOrmModule.forFeature([Equipojugador]), TypeOrmModule.forFeature([Posicionjugador])],
  controllers: [JugadorController],
  providers: [JugadorService],
})
export class JugadorModule {}
