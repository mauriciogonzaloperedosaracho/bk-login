import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TratamientolesionController } from './controllers/tratamientolesion.controller';
import { Tratamientolesion } from './entities/tratamientolesion.entity';
import { TratamientolesionService } from './services/tratamientolesion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tratamientolesion])],
  controllers: [TratamientolesionController],
  providers: [TratamientolesionService],
})
export class TratamientolesionModule {}
