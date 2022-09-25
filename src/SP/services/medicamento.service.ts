import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { MedicamentoDto } from '../dtos/medicamento.dto';
import { Medicamentos } from '../entities/medicamento.entity';

@Injectable()
export class MedicamentoService {

    constructor(
        @InjectRepository(Medicamentos) private tasksRepo: Repository<Medicamentos>,
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

  @InjectRepository(Medicamentos)
  private readonly repository: Repository<Medicamentos>;

  findAll() {
    return this.tasksRepo.find({ where: { estado: 1 } });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id, { where: { estado: 1 } });
  }


  public async register(body: MedicamentoDto): Promise<Medicamentos | never> {
    const { nombre, descripcion, estado }: MedicamentoDto = body;
    let medicamento: Medicamentos = await this.repository.findOne({ where: { nombre } });

    if (medicamento) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    medicamento = new Medicamentos();

    medicamento.nombre = nombre;
    medicamento.descripcion = descripcion;
    medicamento.estado = estado;
   

    return this.repository.save(medicamento);
  }
}
