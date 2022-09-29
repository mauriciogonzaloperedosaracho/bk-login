import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesion } from './lesion.entity';

@Entity()
export class Posiblelesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public tipolesion: string;

  @Column()
  public descripcion: string;

  @Column()
  public estado: number;

  @OneToMany(() => Lesion, (Lesion) => Lesion.Posiblelesion)
  Lesion: Lesion[];

}
