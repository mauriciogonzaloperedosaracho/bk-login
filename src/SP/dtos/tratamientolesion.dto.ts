import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TratamientolesionDto {

  @IsString()
  @IsOptional()
  public readonly tratamientolesion?: string;

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  @IsNumber()
  @IsOptional()
  public readonly estado?: number;

}
