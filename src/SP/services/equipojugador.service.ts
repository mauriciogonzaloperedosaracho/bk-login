import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipojugadorDto } from '../dtos/equipojugador.dto';
import { Equipojugador } from '../entities/equipojugador.entity';

@Injectable()
export class EquipojugadorService {

    constructor(
        @InjectRepository(Equipojugador) private tasksRepo: Repository<Equipojugador>,
      ) {}

  async update(idequipo: number, body: any) {
    const task = await this.tasksRepo.findOne(idequipo);
    this.tasksRepo.merge(task, body);
    return this.tasksRepo.save(task);
  }

  async updatee(idequipo: number, body: any) {
    const task = await this.tasksRepo.findOne(idequipo);
    
    task.estado = 0;
    return this.tasksRepo.save(task);
  }

  @InjectRepository(Equipojugador)
  private readonly repository: Repository<Equipojugador>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(idequipo: number) {
    return this.tasksRepo.findOne(idequipo, { where: { estado: 1 } });
  }


  public async register(body: EquipojugadorDto): Promise<Equipojugador | never> {
    const { descripcion, estado }: EquipojugadorDto = body;
    let equipojugador: Equipojugador = await this.repository.findOne({ where: { descripcion } });

    if (equipojugador) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    equipojugador = new Equipojugador();
    equipojugador.descripcion = descripcion;
    equipojugador.estado = estado;
   

    return this.repository.save(equipojugador);
  }
}
