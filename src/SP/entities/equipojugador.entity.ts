import { Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';
import { Jugador } from './jugador.entity';
@Entity()
export class Equipojugador {
  @PrimaryGeneratedColumn()
  public idequipo: number;

  @Column({ type: 'varchar', nullable: true })
  public descripcion: string;

  @Column({ type: 'int', nullable: true })
  public estado: number;

  @OneToMany(() => Jugador, (jugador) => jugador.Equipojugador)
  jugadores: Jugador[];

}
