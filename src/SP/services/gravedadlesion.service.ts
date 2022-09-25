import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GravedadlesionDto } from '../dtos/gravedadlesion.dto';
import { Gravedadlesion } from '../entities/gravedadlesion.entity';

@Injectable()
export class GravedadlesionService {

    constructor(
        @InjectRepository(Gravedadlesion) private tasksRepo: Repository<Gravedadlesion>,
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

  @InjectRepository(Gravedadlesion)
  private readonly repository: Repository<Gravedadlesion>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id, { where: { estado: 1 } });
  }


  public async register(body: GravedadlesionDto): Promise<Gravedadlesion | never> {
    const { dias, descripcion, estado }: GravedadlesionDto = body;
    let gravedadlesion: Gravedadlesion = await this.repository.findOne({ where: { descripcion } });

    if (gravedadlesion) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    gravedadlesion = new Gravedadlesion();
    gravedadlesion.descripcion = descripcion;
    gravedadlesion.dias = dias;
    gravedadlesion.estado = estado;
   

    return this.repository.save(gravedadlesion);
  }
}
