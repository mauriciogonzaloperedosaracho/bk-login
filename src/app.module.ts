import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { MedicamentoModule } from './SP/medicamento.module';
import { MomentolesionModule } from './SP/momentolesion.module';
import { PosicionjugadorModule } from './SP/posicionjugador.module';
import { GravedadlesionModule } from './SP/gravedadlesion.module';
import { TratamientolesionModule } from './SP/tratamientolesion.module';
import { EquipojugadorModule } from './SP/equipojugador.module';
import { JugadorModule } from './SP/jugador.module';
import { ReportarlesionModule } from './SP/reportarlesion.module';
import { LesionModule } from './SP/lesion.module';
import { LocalizacionlesionModule } from './SP/localizacionlesion.module';
import { CausalesionModule } from './SP/causalesion.module';
import { PosiblelesionModule } from './SP/posiblelesion.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, MomentolesionModule, LocalizacionlesionModule, CausalesionModule, PosiblelesionModule,
    TratamientolesionModule, GravedadlesionModule, PosicionjugadorModule, EquipojugadorModule, 
    JugadorModule, ReportarlesionModule, LesionModule],
})
export class AppModule {}
