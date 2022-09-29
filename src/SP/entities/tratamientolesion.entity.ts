import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesion } from './lesion.entity';

@Entity()
export class Tratamientolesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public tratamientolesion: string;

  @Column()
  public descripcion: string;

  @Column()
  public estado: number;

  @OneToMany(() => Lesion, (Lesion) => Lesion.Tratamientolesion)
  Lesion: Lesion[];

}
