import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reportarlesion } from './reportarlesion.entity';

@Entity()
export class Localizacionlesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public descripcion: string;

  @Column()
  public estado: number;

  @OneToMany(() => Reportarlesion, (Reportarlesion) => Reportarlesion.Localizacionlesion)
  Reportarlesion: Reportarlesion[];

}
