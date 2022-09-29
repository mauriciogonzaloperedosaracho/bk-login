
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Jugador } from './jugador.entity';
import { Momentolesion } from './momentolesion.entity';
import { Localizacionlesion } from './localizacionlesion.entity';
import { Causalesion } from './causalesion.entity';
import { Lesion } from './lesion.entity';

@Entity()
export class Reportarlesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public descripcion: string;

  @Column()
  public atencion: string;

  @ManyToOne(() => Jugador, (Jugador) => Jugador.Reportarlesion)
  @JoinColumn({ name: 'jugador_id' })
  Jugador: Jugador;

  @ManyToOne(() => Momentolesion, (Momentolesion) => Momentolesion.Reportarlesion)
  @JoinColumn({ name: 'momentolesion_id' })
  Momentolesion: Momentolesion;

  @ManyToOne(() => Localizacionlesion, (Localizacionlesion) => Localizacionlesion.Reportarlesion)
  @JoinColumn({ name: 'localizacionlesion_id' })
  Localizacionlesion: Localizacionlesion;

  @ManyToOne(() => Causalesion, (Causalesion) => Causalesion.Reportarlesion)
  @JoinColumn({ name: 'causalesion_id' })
  Causalesion: Causalesion;

  @OneToMany(() => Lesion, (Lesion) => Lesion.Reportarlesion)
  Lesion: Lesion[];
} 
 