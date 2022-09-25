import { IsNumber, IsOptional, IsString } from 'class-validator';

export class MedicamentoDto {

  @IsString()
  @IsOptional()
  public readonly nombre?: string;

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  @IsNumber()
  @IsOptional()
  public readonly estado?: number;

}
