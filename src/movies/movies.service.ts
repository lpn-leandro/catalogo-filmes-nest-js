import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private movies = [
    { id: 1, name: 'Kimi no na Wa' },
    { id: 2, name: 'Avengers' }
  ];
  // Armazena a lista de filmes em memória

  // Método para criar um novo filme
  create(movie) {
    this.movies.push(movie);
    return movie;
  }

  // Método para listar todos os filmes
  findAll() {
    return this.movies;
  }

  // Método para encontrar um item específico pelo ID
  findOne(id: number) {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) throw new NotFoundException(`Filme com ID ${id} não encontrado`);
    return movie;
  }

  // Método para atualizar um item específico pelo ID
  update(id: number, updateData) {
    const movie = this.findOne(id);
    Object.assign(movie, updateData);
    return movie;
  }

  // Método para remover um item específico pelo ID
  remove(id: number) {
    const index = this.movies.findIndex(movie => movie.id === id);
    if (index === -1) throw new NotFoundException(`Filme com ID ${id} não encontrado`);
    this.movies.splice(index, 1);
  }
}