import { IsNumber, IsOptional, IsString } from 'class-validator';

export class MedicamentoDto {

  public readonly nombre?: string;

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  @IsNumber()
  @IsOptional()
  public readonly estado?: number;

}
