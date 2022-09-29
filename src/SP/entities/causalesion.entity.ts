import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reportarlesion } from './reportarlesion.entity';

@Entity()
export class Causalesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public descripcion: string;

  @Column()
  public estado: number;

  @OneToMany(() => Reportarlesion, (Reportarlesion) => Reportarlesion.Causalesion)
  Reportarlesion: Reportarlesion[];

}
