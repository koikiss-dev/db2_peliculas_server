import { IsString, IsNumber } from 'class-validator';

export class CreatePeliculaDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;
}
