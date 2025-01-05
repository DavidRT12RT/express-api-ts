import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Document } from "./document.entity";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id!:string;

  @Column()
  name!:string;

  @Column({unique:true})
  email!:string;

  @Column()
  password!:string;

  @OneToMany(
    () => Document,
    (document) => document.user
  )
  documents!:Document[];

};