import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MoviesService {
    // Armazena a lista de filmes em um array
  private movies = [];

  // Método para criar um novo filme
  create(movie) {
    movie.id = this.movies.length + 1;
    this.movies.push(movie);
    return movie;
  }

  // Método para listar todos os filmes
  findAll(filter?: string, page?: number) {
    //return this.movies;
    let results = this.movies;

    if (filter) {
      results = results.filter((movie) =>
        movie.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    const pageSize = 5;
    const start = ((page || 1) - 1) * pageSize;

    return results.slice(start, start + pageSize);
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