import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipojugador } from '../entities/equipojugador.entity';
import { Jugador } from '../entities/jugador.entity';
import { Posicionjugador } from '../entities/posicionjugador.entity';
@Injectable()
export class JugadorService {

    constructor(
        @InjectRepository(Equipojugador) private tasksRepo: Repository<Equipojugador>,
        @InjectRepository(Jugador) private jugadorRepo: Repository<Jugador>,
        @InjectRepository(Posicionjugador) private posicionRepo: Repository<Posicionjugador>,
      ) {}

  
  findAll() {
    return this.jugadorRepo.find({
        relations: ['Equipojugador', 'Posicionjugador'], where: { estado: 1 }
    });
    }
    
    findOne(id: number) {
      return this.jugadorRepo.findOne(id, { relations: ['Equipojugador', 'Posicionjugador'] });
    }
    async update(id: number, body: any) {
      const task = await this.jugadorRepo.findOne(id);
      this.jugadorRepo.merge(task, body);
      return this.jugadorRepo.save(task);
    }
    async remove(id: number) {
      await this.jugadorRepo.delete(id);
      return true;
    }
  async create(body: any) {
    
    const equipojugador = await this.tasksRepo.findOne(body.equipojugadorId);
    const posicionjugador = await this.posicionRepo.findOne(body.posicionjugadorId);
    if(!equipojugador || !posicionjugador){
        throw new NotFoundException('Equipo  o posicion not fund');
    }
    const newJugador = new Jugador();
    newJugador.Equipojugador = equipojugador;
    newJugador.Posicionjugador = posicionjugador;
    newJugador.nombre = body.nombre;
    newJugador.apellidopaterno = body.apellidopaterno;
    newJugador.apellidomaterno = body.apellidomaterno;
    newJugador.carnet = body.carnet;
    newJugador.ciudad = body.ciudad;
    newJugador.direccion = body.direccion;
    newJugador.telefono = body.telefono;
    newJugador.fechanacimiento = body.fechanacimiento;
    newJugador.estado = body.estado;
    return this.jugadorRepo.save(newJugador);

  }

}
