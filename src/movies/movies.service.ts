import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private movies = [
    { id: 1, name: 'Kimi no na Wa' },
    { id: 2, name: 'Avengers' }
  ];

  findAll() {
    return this.movies;
  }

  findOne(id: number) {
    return this.movies.find(movie => movie.id === id);
  }

  create(movie: { name: string }) {
    const newMovie = {
      id: this.movies.length + 1,
      ...movie,
    };
    this.movies.push(newMovie);
    return newMovie;
  }

  update(id: number, movieUpdates: { name: string }) {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
      return `Filme com ID ${id} não encontrado`;
    }
    this.movies[movieIndex] = { ...this.movies[movieIndex], ...movieUpdates };
    return this.movies[movieIndex];
  }

  remove(id: number) {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
      return `Filme com ID ${id} não encontrado`;
    }
    this.movies.splice(movieIndex, 1);
    return `Filme com ID ${id} removido com sucesso`;
  }
}