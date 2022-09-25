import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PosiblelesionDto } from '../dtos/posiblelesion.dto';
import { Posiblelesion } from '../entities/posiblelesion.entity';

@Injectable()
export class PosiblelesionService {

    constructor(
        @InjectRepository(Posiblelesion) private tasksRepo: Repository<Posiblelesion>,
      ) {}

  async update(id: number, body: any) {
    const task = await this.tasksRepo.findOne(id);
    this.tasksRepo.merge(task, body);
    return this.tasksRepo.save(task);
  }

  async updatee(id: number, body: any) {
    const task = await this.tasksRepo.findOne(id);
    
    task.estado = 0;
    return this.tasksRepo.save(task);
  }

  @InjectRepository(Posiblelesion)
  private readonly repository: Repository<Posiblelesion>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id, { where: { estado: 1 } });
  }


  public async register(body: PosiblelesionDto): Promise<Posiblelesion | never> {
    const { tipolesion, descripcion, estado }: PosiblelesionDto = body;
    let posiblelesion: Posiblelesion = await this.repository.findOne({ where: { tipolesion } });

    if (posiblelesion) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    posiblelesion = new Posiblelesion();
    posiblelesion.tipolesion = tipolesion;
    posiblelesion.descripcion = descripcion;
    posiblelesion.estado = estado;
   

    return this.repository.save(posiblelesion);
  }
}
