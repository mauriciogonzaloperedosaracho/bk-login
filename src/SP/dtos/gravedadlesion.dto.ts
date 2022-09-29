import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GravedadlesionDto {

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  public readonly dias?: number;

  
  public readonly estado?: number;

}
