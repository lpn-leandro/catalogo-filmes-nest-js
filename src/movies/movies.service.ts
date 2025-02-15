import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  // Método para criar um novo filme
  async create(data: Prisma.MoviesCreateInput) {
    return this.prisma.movies.create({ data });
  }

  // Método para listar todos os filmes
  async findAll(filter?: string, page?: number) {
    let results = await this.prisma.movies.findMany();

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
  async findOne(id: number) {
    const movie = this.prisma.movies.findUnique({ where: { id } });
    if (!movie)
      throw new NotFoundException(`Filme com ID ${id} não encontrado`);
    return movie;
  }

  // Método para atualizar um item específico pelo ID
  async update(id: number, data: Prisma.MoviesUpdateInput) {
    return this.prisma.movies.update({ where: { id }, data });
  }

  // Método para remover um item específico pelo ID
  async remove(id: number) {
    return this.prisma.movies.delete({ where: { id } });
  }
}
