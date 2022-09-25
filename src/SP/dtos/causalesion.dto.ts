import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CausalesionDto {

  @IsString()
  @IsOptional()
  public readonly descripcion?: string;

  @IsNumber()
  @IsOptional()
  public readonly estado?: number;

}
