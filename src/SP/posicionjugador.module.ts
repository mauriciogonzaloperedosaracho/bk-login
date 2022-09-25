import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosicionjugadorController } from './controllers/posicionjugador.controller';
import { Posicionjugador } from './entities/posicionjugador.entity';
import { PosicionjugadorService } from './services/posicionjugador.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posicionjugador])],
  controllers: [PosicionjugadorController],
  providers: [PosicionjugadorService],
})
export class PosicionjugadorModule {}
