import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MoviesModule, SharedModule, CoreModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
