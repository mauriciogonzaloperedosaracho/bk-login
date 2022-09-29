import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesion } from './lesion.entity';

@Entity()
export class Gravedadlesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public descripcion: string;

  @Column()
  public dias: number;

  @Column()
  public estado: number;
  
  @OneToMany(() => Lesion, (Lesion) => Lesion.Gravedadlesion)
  Lesion: Lesion[];

}