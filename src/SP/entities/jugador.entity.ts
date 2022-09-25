import { profile } from 'console';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Equipojugador } from './equipojugador.entity';
import { Posicionjugador } from './posicionjugador.entity';
import { Reportarlesion } from './reportarlesion.entity';
@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public nombre: string;

  @Column({ type: 'varchar', nullable: true })
  public apellidopaterno: string;

  @Column({ type: 'varchar', nullable: true })
  public apellidomaterno: string;

  @Column({ type: 'int', nullable: true })
  public carnet: number;

  @Column({ type: 'varchar', nullable: true })
  public ciudad: string;

  @Column({ type: 'varchar', nullable: true })
  public direccion: string;

  @Column({ type: 'varchar', nullable: true })
  public telefono: string;

  @Column({ type: 'date', nullable: true })
  public fechanacimiento: string;

  @Column({ type: 'int', nullable: true })
  public estado: number | null;

  @ManyToOne(() => Equipojugador, (Equipojugador) => Equipojugador.jugadores)
  @JoinColumn({ name: 'equipojugador_id' })
  Equipojugador: Equipojugador;

  @ManyToOne(() => Posicionjugador, (Posicionjugador) => Posicionjugador.jugadores)
  @JoinColumn({ name: 'posicionjugador_id' })
  Posicionjugador: Posicionjugador;

  @OneToMany(() => Reportarlesion, (Reportarlesion) => Reportarlesion.Jugador)
  Reportarlesion: Reportarlesion[];

} 
 