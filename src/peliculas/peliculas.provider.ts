import { DataSource } from 'typeorm';
import { Peliculas } from './entities/pelicula.entity';

export const moviesProviders = [
  {
    provide: 'PELICULA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Peliculas),
    inject: ['DATA_SOURCE'],
  },
];
