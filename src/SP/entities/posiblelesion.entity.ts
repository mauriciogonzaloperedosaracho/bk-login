import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesion } from './lesion.entity';

@Entity()
export class Posiblelesion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public tipolesion: string | null;

  @Column({ type: 'varchar', nullable: true })
  public descripcion: string | null;

  @Column({ type: 'int', nullable: true })
  public estado: number | null;

  @OneToMany(() => Lesion, (Lesion) => Lesion.Posiblelesion)
  Lesion: Lesion[];

}
