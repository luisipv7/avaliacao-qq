import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from './../../usuario/entities/usuario.entity';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Usuario, author => author.tweet)
  usuario: Usuario;

  @Column({
    length: 140
  })
  texto: string
}
