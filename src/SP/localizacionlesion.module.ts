import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalizacionlesionController } from './controllers/localizacionlesion.controller';
import { Localizacionlesion } from './entities/localizacionlesion.entity';
import { LocalizacionlesionService } from './services/localizacionlesion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Localizacionlesion])],
  controllers: [LocalizacionlesionController],
  providers: [LocalizacionlesionService],
})
export class LocalizacionlesionModule {}
