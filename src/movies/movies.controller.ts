import { Controller, Get, Post, Put, Patch, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // Método POST para criar um novo item
  @Post()
  @HttpCode(201)
  create(@Body() createMovie: any) {// Parâmetro recebido diretamente sem DTO
    return this.moviesService.create(createMovie);
  }

  // Método GET para listar todos os itens
  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  // Método GET para buscar um item específico pelo ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  // Método PUT para substituir um item específico pelo ID
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMovie: any) {
    return this.moviesService.update(+id, updateMovie);
  }

  // Método PATCH para atualizar parcialmente um item pelo ID
  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() partialUpdateMovie: any) {
    return this.moviesService.update(+id, partialUpdateMovie);
  }

  // Método DELETE para remover um item específico pelo ID
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}