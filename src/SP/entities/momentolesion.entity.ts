import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reportarlesion } from './reportarlesion.entity';

@Entity()
export class Momentolesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public descripcion: string | null;

  @Column({ type: 'int', nullable: true })
  public estado: number | null;

  @OneToMany(() => Reportarlesion, (Reportarlesion) => Reportarlesion.Momentolesion)
  Reportarlesion: Reportarlesion[];


}
