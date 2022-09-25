import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reportarlesion } from './reportarlesion.entity';

@Entity()
export class Localizacionlesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public descripcion: string | null;

  @Column({ type: 'int', nullable: true })
  public estado: number | null;

  @OneToMany(() => Reportarlesion, (Reportarlesion) => Reportarlesion.Localizacionlesion)
  Reportarlesion: Reportarlesion[];

}
