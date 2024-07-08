import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculasModule } from './peliculas/peliculas.module';
import { Peliculas } from './peliculas/entities/pelicula.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (confidService: ConfigService) =>
        confidService.get('typeorm'),
    }),
    PeliculasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
