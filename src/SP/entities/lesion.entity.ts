
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { User } from '../../auth/user.entity';
import { Reportarlesion } from './reportarlesion.entity';
import { Posiblelesion } from './posiblelesion.entity';
import { Gravedadlesion } from './gravedadlesion.entity';
import { Tratamientolesion } from './tratamientolesion.entity';

@Entity()
export class Lesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public descripcion: string;

  @CreateDateColumn({
    name: 'creation_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationAt: Date;
  
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;


  @ManyToOne(() => Tratamientolesion, (Tratamientolesion) => Tratamientolesion.Lesion)
  @JoinColumn({ name: 'tratamientolesion_id' })
  Tratamientolesion: Tratamientolesion;

  @ManyToOne(() => Gravedadlesion, (Gravedadlesion) => Gravedadlesion.Lesion)
  @JoinColumn({ name: 'gravedadlesion_id' })
  Gravedadlesion: Gravedadlesion;

  @ManyToOne(() => Posiblelesion, (Posiblelesion) => Posiblelesion.Lesion)
  @JoinColumn({ name: 'posiblelesion_id' })
  Posiblelesion: Posiblelesion;

  @ManyToOne(() => Reportarlesion, (Reportarlesion) => Reportarlesion.Lesion)
  @JoinColumn({ name: 'reportarlesion_id' })
  Reportarlesion: Reportarlesion;

  @ManyToOne(() => User, (User) => User.Lesion)
  @JoinColumn({ name: 'user_id' })
  User: User;


} 
 