import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Peliculas {
  @PrimaryGeneratedColumn()
  id_movie: number;

  @Column()
  name: string;

  @Column({ length: 800 })
  description: string;

  @Column()
  image: string;
}
