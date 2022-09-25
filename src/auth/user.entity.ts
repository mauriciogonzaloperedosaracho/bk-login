import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Lesion } from 'src/SP/entities/lesion.entity';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidopaterno: string;

  @Column()
  apellidomaterno: string;

  @Column()
  carnet: string;

  @Column()
  ciudad: string;

  @Column({ type: 'date'})
  fechanacimiento: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(() => Lesion, (Lesion) => Lesion.User)
  Lesion: Lesion[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
