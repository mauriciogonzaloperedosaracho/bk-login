import { Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';
import { Jugador } from './jugador.entity';

@Entity()
export class Posicionjugador {
  @PrimaryGeneratedColumn()
  public idposicion!: number;

  @Column()
  public descripcion: string;

  @Column()
  public estado: number;

  @OneToMany(() => Jugador, (jugador) => jugador.Posicionjugador)
  jugadores: Jugador[];

}
