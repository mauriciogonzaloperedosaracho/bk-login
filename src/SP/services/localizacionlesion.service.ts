import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalizacionlesionDto } from '../dtos/localizacionlesion.dto';
import { Localizacionlesion } from '../entities/localizacionlesion.entity';

@Injectable()
export class LocalizacionlesionService {

    constructor(
        @InjectRepository(Localizacionlesion) private tasksRepo: Repository<Localizacionlesion>,
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

  @InjectRepository(Localizacionlesion)
  private readonly repository: Repository<Localizacionlesion>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id, { where: { estado: 1 } });
  }


  public async register(body: LocalizacionlesionDto): Promise<Localizacionlesion | never> {
    const { descripcion, estado }: LocalizacionlesionDto = body;
    let localizacionlesion: Localizacionlesion = await this.repository.findOne({ where: { descripcion } });

    if (localizacionlesion) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    localizacionlesion = new Localizacionlesion();
    localizacionlesion.descripcion = descripcion;
    localizacionlesion.estado = estado;
   

    return this.repository.save(localizacionlesion);
  }
}
