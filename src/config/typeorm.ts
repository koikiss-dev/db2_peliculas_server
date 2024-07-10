import { Peliculas } from 'src/peliculas/entities/pelicula.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { registerAs } from '@nestjs/config';
import { type TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'oracle',
  host: 'localhost',
  port: 1521,
  username: 'system',
  password: 'root',
  sid: 'free',
  database: 'FREEPDB1',
  entities: [Peliculas],
  synchronize: true,
  logging: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
