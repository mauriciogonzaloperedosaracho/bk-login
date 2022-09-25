import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CausalesionDto } from '../dtos/causalesion.dto';
import { Causalesion } from '../entities/causalesion.entity';

@Injectable()
export class CausalesionlesionService {

    constructor(
        @InjectRepository(Causalesion) private tasksRepo: Repository<Causalesion>,
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

  @InjectRepository(Causalesion)
  private readonly repository: Repository<Causalesion>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id, { where: { estado: 1 } });
  }


  public async register(body: CausalesionDto): Promise<Causalesion | never> {
    const { descripcion, estado }: CausalesionDto = body;
    let causalesion: Causalesion = await this.repository.findOne({ where: { descripcion } });

    if (causalesion) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    causalesion = new Causalesion();
    causalesion.descripcion = descripcion;
    causalesion.estado = estado;
   

    return this.repository.save(causalesion);
  }
}
