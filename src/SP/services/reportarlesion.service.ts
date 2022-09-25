import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reportarlesion } from '../entities/reportarlesion.entity';
import { Jugador } from '../entities/jugador.entity';
import { Momentolesion } from '../entities/momentolesion.entity';
import { Localizacionlesion } from '../entities/localizacionlesion.entity';
import { Causalesion } from '../entities/causalesion.entity';

@Injectable()
export class ReportarlesService {

    constructor(
        @InjectRepository(Momentolesion) private momentolesionRepo: Repository<Momentolesion>,
        @InjectRepository(Jugador) private jugadorRepo: Repository<Jugador>,
        @InjectRepository(Localizacionlesion) private localizacionlesionRepo: Repository<Localizacionlesion>,
        @InjectRepository(Causalesion) private causaRepo: Repository<Causalesion>,
        @InjectRepository(Reportarlesion) private reporRepo: Repository<Reportarlesion>,
    ) {}

  
  findAll() {
    return this.reporRepo.find({
        relations: ['Momentolesion', 'Jugador', 'Localizacionlesion', 'Causalesion']
    });
    }

  async create(body: any) {
    
    const momentolesion = await this.momentolesionRepo.findOne(body.momentolesionId);
    const jugador = await this.jugadorRepo.findOne(body.jugadorId);
    const localizacionlesion = await this.localizacionlesionRepo.findOne(body.localizacionlesionId);
    const causalesion = await this.causaRepo.findOne(body.causalesionId);

    if(!momentolesion || !jugador || !localizacionlesion || !causalesion){
        throw new NotFoundException('not fund');
    }
    const newReporte = new Reportarlesion();
    newReporte.Momentolesion = momentolesion;
    newReporte.Jugador = jugador;
    newReporte.Localizacionlesion = localizacionlesion;
    newReporte.Causalesion = causalesion;
    newReporte.descripcion = body.descripcion;
    newReporte.atencion = body.atencion;

    return this.reporRepo.save(newReporte);

  }

}
