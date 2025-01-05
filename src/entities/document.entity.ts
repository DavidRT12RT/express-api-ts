import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Document {


  @PrimaryGeneratedColumn()
  id!:number;

  @Column()
  fileName!:string;

  @Column()
  path!:string;

  @ManyToOne(
    () => User,
    (user) => user.documents
  )
  user!:User;

};