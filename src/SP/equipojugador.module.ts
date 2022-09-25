import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipojugadorController } from './controllers/equipojugador.controller';
import { Equipojugador } from './entities/equipojugador.entity';
import { EquipojugadorService } from './services/equipojugador.service';

@Module({
  imports: [TypeOrmModule.forFeature([Equipojugador])],
  controllers: [EquipojugadorController],
  providers: [EquipojugadorService],
})
export class EquipojugadorModule {}
