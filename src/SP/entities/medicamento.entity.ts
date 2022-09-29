import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medicamentos {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public nombre: string;

  @Column()
  public descripcion: string;

  @Column()
  public estado: number;

}
