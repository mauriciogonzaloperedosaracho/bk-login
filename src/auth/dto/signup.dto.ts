import { IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellidopaterno: string;

  @IsNotEmpty()
  apellidomaterno: string;

  @IsNotEmpty()
  carnet: string;

  @IsNotEmpty()
  ciudad: string;

  @IsNotEmpty()
  fechanacimiento: string;


  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;
}
