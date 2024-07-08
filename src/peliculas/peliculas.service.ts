import { Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Peliculas } from './entities/pelicula.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectModel(Peliculas)
    private peliculasRepository: Repository<Peliculas>,
  ) {}
  create(createPeliculaDto: CreatePeliculaDto) {
    const movieData = this.peliculasRepository.create(createPeliculaDto);
    return this.peliculasRepository.save(movieData);
  }

  findAll(): Promise<Peliculas[]> {
    return this.peliculasRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pelicula`;
  }

  update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return `This action updates a #${id} pelicula`;
  }

  remove(id: number) {
    return `This action removes a #${id} pelicula`;
  }
}
