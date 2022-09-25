import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PosiblelesionDto {

  @IsString()
  @IsOptional()
  public readonly tipolesion?: string;

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  @IsNumber()
  @IsOptional()
  public readonly estado?: number;

}
