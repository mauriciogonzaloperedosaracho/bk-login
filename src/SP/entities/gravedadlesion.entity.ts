import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesion } from './lesion.entity';

@Entity()
export class Gravedadlesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public descripcion: string | null;

  @Column({ type: 'int', nullable: true })
  public dias: number | null;

  @Column({ type: 'int', nullable: true })
  public estado: number | null;
  
  @OneToMany(() => Lesion, (Lesion) => Lesion.Gravedadlesion)
  Lesion: Lesion[];

}