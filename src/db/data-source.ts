import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { Document } from '../entities/document.entity';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'SyntaxError@404',
  database: 'express_api_ts',
  synchronize: true,  // Sincroniza los cambios con la DB (ideal solo para desarrollo)
  logging: false, // Mensajes de Log (Consultas SQL)
  entities: [User,Document],  // Entidades
  migrations: ["src/db/migrations/**/*.ts"],
  // driver:require("mysql2"),
  subscribers: []
});
