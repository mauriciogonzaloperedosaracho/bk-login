import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GravedadlesionController } from './controllers/gravedadlesion.controller';
import { Gravedadlesion } from './entities/gravedadlesion.entity';
import { GravedadlesionService } from './services/gravedadlesion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gravedadlesion])],
  controllers: [GravedadlesionController],
  providers: [GravedadlesionService],
})
export class GravedadlesionModule {}
