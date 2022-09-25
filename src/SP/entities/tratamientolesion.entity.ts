import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesion } from './lesion.entity';

@Entity()
export class Tratamientolesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public tratamientolesion: string | null;

  @Column({ type: 'varchar', nullable: true })
  public descripcion: string | null;

  @Column({ type: 'int', nullable: true })
  public estado: number | null;

  @OneToMany(() => Lesion, (Lesion) => Lesion.Tratamientolesion)
  Lesion: Lesion[];

}
