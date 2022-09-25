import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CausalesionController } from './controllers/causalesion.controller';
import { Causalesion } from './entities/causalesion.entity';
import { CausalesionlesionService } from './services/causalesion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Causalesion])],
  controllers: [CausalesionController],
  providers: [CausalesionlesionService],
})
export class CausalesionModule {}
