import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from './../../usuario/entities/usuario.entity';

@Entity()
export class Seguidore {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(type => Usuario, usuario => usuario.seguidor)
  usuario: Usuario

  @Column('simple-array')
  lst_usuarios_seguidos: number[]
}
