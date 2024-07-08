import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { Peliculas } from './entities/pelicula.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [TypeOrmModule.forFeature([Peliculas])],
  controllers: [PeliculasController],
  providers: [PeliculasService],
})
export class PeliculasModule {}
