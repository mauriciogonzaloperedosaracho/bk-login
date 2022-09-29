import { profile } from 'console';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Equipojugador } from './equipojugador.entity';
import { Posicionjugador } from './posicionjugador.entity';
import { Reportarlesion } from './reportarlesion.entity';
@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public nombre: string;

  @Column()
  public apellidopaterno: string;

  @Column()
  public apellidomaterno: string;

  @Column()
  public carnet: number;

  @Column()
  public ciudad: string;

  @Column()
  public direccion: string;

  @Column()
  public telefono: string;

  @Column()
  public fechanacimiento: string;

  @Column()
  public estado: number;

  @ManyToOne(() => Equipojugador, (Equipojugador) => Equipojugador.jugadores)
  @JoinColumn({ name: 'equipojugador_id' })
  Equipojugador: Equipojugador;

  @ManyToOne(() => Posicionjugador, (Posicionjugador) => Posicionjugador.jugadores)
  @JoinColumn({ name: 'posicionjugador_id' })
  Posicionjugador: Posicionjugador;

  @OneToMany(() => Reportarlesion, (Reportarlesion) => Reportarlesion.Jugador)
  Reportarlesion: Reportarlesion[];

} 
 