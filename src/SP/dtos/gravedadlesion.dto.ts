import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GravedadlesionDto {

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  @IsNumber()
  @IsOptional()
  public readonly dias?: number;

  @IsNumber()
  @IsOptional()
  public readonly estado?: number;

}
