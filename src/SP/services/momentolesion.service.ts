import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MomentolesionDto } from '../dtos/momentolesion.dto';
import { Momentolesion } from '../entities/momentolesion.entity';

@Injectable()
export class MomentolesionService {

    constructor(
        @InjectRepository(Momentolesion) private tasksRepo: Repository<Momentolesion>,
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

  @InjectRepository(Momentolesion)
  private readonly repository: Repository<Momentolesion>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id, { where: { estado: 1 } });
  }


  public async register(body: MomentolesionDto): Promise<Momentolesion | never> {
    const { descripcion, estado }: MomentolesionDto = body;
    let momentolesion: Momentolesion = await this.repository.findOne({ where: { descripcion } });

    if (momentolesion) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    momentolesion = new Momentolesion();
    momentolesion.descripcion = descripcion;
    momentolesion.estado = estado;
   

    return this.repository.save(momentolesion);
  }
}
