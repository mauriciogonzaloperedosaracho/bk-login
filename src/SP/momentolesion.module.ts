import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MomentolesionController } from './controllers/momentolesion.controller';
import { Momentolesion } from './entities/momentolesion.entity';
import { MomentolesionService } from './services/momentolesion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Momentolesion])],
  controllers: [MomentolesionController],
  providers: [MomentolesionService],
})
export class MomentolesionModule {}
