import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medicamentos {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public nombre: string | null;

  @Column({ type: 'varchar', nullable: true })
  public descripcion: string | null;

  @Column({ type: 'int', nullable: true })
  public estado: number | null;

}
