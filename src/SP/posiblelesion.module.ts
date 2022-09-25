import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosiblelesionController } from './controllers/posiblelesion.controller';
import { Posiblelesion } from './entities/posiblelesion.entity';
import { PosiblelesionService } from './services/posiblelesion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posiblelesion])],
  controllers: [PosiblelesionController],
  providers: [PosiblelesionService],
})
export class PosiblelesionModule {}
