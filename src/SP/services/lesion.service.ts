import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { Lesion } from '../entities/lesion.entity';
import { Tratamientolesion } from '../entities/tratamientolesion.entity';
import { User } from '../../auth/user.entity';
import { Gravedadlesion } from '../entities/gravedadlesion.entity';
import { Reportarlesion } from '../entities/reportarlesion.entity';
import { Posiblelesion } from '../entities/posiblelesion.entity';
@Injectable()
export class LesionService {

    constructor(
        @InjectRepository(Lesion) private lesionRepo: Repository<Lesion>,
        @InjectRepository(Tratamientolesion) private tratamientolesionRepo: Repository<Tratamientolesion>,
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectRepository(Gravedadlesion) private gravedadlesionRepo: Repository<Gravedadlesion>,
        @InjectRepository(Reportarlesion) private reporRepo: Repository<Reportarlesion>,
        @InjectRepository(Posiblelesion) private posiblelesionRepo: Repository<Posiblelesion>,
    ) {}

  
  findAll() {
    return this.reporRepo.find({
        relations: ['Lesion', 'Tratamientolesion', 'User', 'Gravedadlesion', 'Reportarlesion', 'Posiblelesion']
    });
    }

  async create(body: any) {
    
    const tratamientolesion = await this.tratamientolesionRepo.findOne(body.tratamientolesionId);
    const user = await this.userRepo.findOne(body.userId);
    const gravedadlesion = await this.gravedadlesionRepo.findOne(body.gravedadlesionId);
    const reportarlesion = await this.reporRepo.findOne(body.reportarlesionId);
    const posiblelesion = await this.posiblelesionRepo.findOne(body.posiblelesionId);

    if(!tratamientolesion || !user || !gravedadlesion || !reportarlesion || !posiblelesion){
        throw new NotFoundException('not fund');
    }
    const newLesion = new Lesion();
    newLesion.Tratamientolesion = tratamientolesion;
    newLesion.User = user;
    newLesion.Gravedadlesion = gravedadlesion;
    newLesion.Reportarlesion = reportarlesion;
    newLesion.Posiblelesion = posiblelesion;
    newLesion.descripcion = body.descripcion;

    return this.lesionRepo.save(newLesion);

  }

}
