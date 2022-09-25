import { Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';
import { Jugador } from './jugador.entity';

@Entity()
export class Posicionjugador {
  @PrimaryGeneratedColumn()
  public idposicion!: number;

  @Column({ type: 'varchar', nullable: true })
  public descripcion: string | null;

  @Column({ type: 'int', nullable: true })
  public estado: number | null;

  @OneToMany(() => Jugador, (jugador) => jugador.Posicionjugador)
  jugadores: Jugador[];

}
