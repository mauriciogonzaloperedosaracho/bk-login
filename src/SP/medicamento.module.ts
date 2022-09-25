import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicamentoController } from './controllers/medicamento.controller';
import { Medicamentos } from './entities/medicamento.entity';
import { MedicamentoService } from './services/medicamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Medicamentos])],
  controllers: [MedicamentoController],
  providers: [MedicamentoService],
})
export class MedicamentoModule {}
