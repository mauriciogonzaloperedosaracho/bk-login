import { IsNumber, IsOptional, IsString } from 'class-validator';

export class LocalizacionlesionDto {

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  @IsNumber()
  @IsOptional()
  public readonly estado?: number;

}
