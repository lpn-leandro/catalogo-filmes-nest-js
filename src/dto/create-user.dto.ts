import {
    IsString,
  } from 'class-validator';
  
  export class CreateMovieDto {

    @IsString({ message: 'O nome deve ser uma string válida.' })
    name: string;

  }