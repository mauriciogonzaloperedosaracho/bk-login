import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Repository } from 'typeorm';
import { User } from './user.entity';
@Injectable()
export class AuthService {
  // alguna modificacion
  private logger = new Logger('AuthService');
  constructor(
    @InjectRepository(UserRepository)
    @InjectRepository(User) private userRepo: Repository<User>,
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) { }
 
  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne(id);
  }
  async signUp(signUpDto: SignUpDto): Promise<void> {
    return this.userRepository.signUp(signUpDto);
  }
  async update(id: number, body: any) {
    const task = await this.userRepo.findOne(id);
    this.userRepo.merge(task, body);
    return this.userRepo.save(task);
  }
  async remove(id: number) {
    await this.userRepo.delete(id);
    return true;
  }
  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const user = await this.userRepository.validateUserPassword(signInDto);

    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
      nombre: user.nombre,
      apellidomaterno: user.apellidomaterno,
      apellidopaterno: user.apellidopaterno,
      carnet: user.carnet,
      ciudad: user.ciudad,
      fechanacimiento: user.fechanacimiento,

    }

    const accessToken = await this.jwtService.sign(payload);
    this.logger.debug(`Successfully Generated JWT Token with payload ${JSON.stringify(payload)}`);

    return { accessToken };
  }
}
