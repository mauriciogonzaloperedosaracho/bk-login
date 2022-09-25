import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { nombre, email, password, apellidomaterno, apellidopaterno, carnet, ciudad, fechanacimiento } = signUpDto;

    const user = new User();
    user.nombre = nombre;
    user.apellidomaterno = apellidomaterno;
    user.apellidopaterno = apellidopaterno;
    user.carnet = carnet;
    user.ciudad = ciudad;
    user.fechanacimiento = fechanacimiento;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email Already Exists!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(signInDto: SignInDto): Promise<{ id: number, email: string, password: string, nombre: string,
    apellidopaterno: string,
    apellidomaterno: string,
    carnet: string,
    ciudad: string,
    fechanacimiento: string,
   }> {
   const { email, password } = signInDto;
   const user = await this.findOne({ email });
   if (user && await user.validatePassword(password)) {
     return user;
   } else {
     return null;
   }
 }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }


}
