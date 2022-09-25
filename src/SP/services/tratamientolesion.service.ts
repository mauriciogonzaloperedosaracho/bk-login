import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TratamientolesionDto } from '../dtos/tratamientolesion.dto';
import { Tratamientolesion } from '../entities/tratamientolesion.entity';

@Injectable()
export class TratamientolesionService {

    constructor(
        @InjectRepository(Tratamientolesion) private tasksRepo: Repository<Tratamientolesion>,
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

  @InjectRepository(Tratamientolesion)
  private readonly repository: Repository<Tratamientolesion>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id, { where: { estado: 1 } });
  }


  public async register(body: TratamientolesionDto): Promise<Tratamientolesion | never> {
    const { tratamientolesion, descripcion, estado }: TratamientolesionDto = body;
    let tratalesion: Tratamientolesion = await this.repository.findOne({ where: { tratamientolesion } });

    if (tratalesion) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    tratalesion = new Tratamientolesion();
    tratalesion.tratamientolesion = tratamientolesion;
    tratalesion.descripcion = descripcion;
    tratalesion.estado = estado;
   

    return this.repository.save(tratalesion);
  }
}
