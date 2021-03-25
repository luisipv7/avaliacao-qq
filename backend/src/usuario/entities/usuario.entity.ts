import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Seguidore } from './../../seguidores/entities/seguidore.entity';
import { Tweet } from './../../tweet/entities/tweet.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column()
  email: string

  @Column()
  pass: string

  @OneToOne(type => Seguidore, seguidor => seguidor.usuario)
  seguidor: Seguidore

  @OneToMany(type => Tweet, tweet => tweet.usuario)
  tweet: Tweet[]
}
