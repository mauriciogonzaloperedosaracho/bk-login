import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PosicionjugadorDto {

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  @IsNumber()
  @IsOptional()
  public readonly estado?: number;

}
