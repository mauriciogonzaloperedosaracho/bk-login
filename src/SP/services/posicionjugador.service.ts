import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PosicionjugadorDto } from '../dtos/posicionjugador.dto';
import { Posicionjugador } from '../entities/posicionjugador.entity';

@Injectable()
export class PosicionjugadorService {

    constructor(
        @InjectRepository(Posicionjugador) private tasksRepo: Repository<Posicionjugador>,
      ) {}

  async update(idposicion: number, body: any) {
    const task = await this.tasksRepo.findOne(idposicion);
    this.tasksRepo.merge(task, body);
    return this.tasksRepo.save(task);
  }

  async updatee(idposicion: number, body: any) {
    const task = await this.tasksRepo.findOne(idposicion);
    
    task.estado = 0;
    return this.tasksRepo.save(task);
  }

  @InjectRepository(Posicionjugador)
  private readonly repository: Repository<Posicionjugador>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(idposicion: number) {
    return this.tasksRepo.findOne(idposicion, { where: { estado: 1 } });
  }


  public async register(body: PosicionjugadorDto): Promise<Posicionjugador | never> {
    const { descripcion, estado }: PosicionjugadorDto = body;
    let posicionjugador: Posicionjugador = await this.repository.findOne({ where: { descripcion } });

    if (posicionjugador) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    posicionjugador = new Posicionjugador();
    posicionjugador.descripcion = descripcion;
    posicionjugador.estado = estado;
   

    return this.repository.save(posicionjugador);
  }
}
