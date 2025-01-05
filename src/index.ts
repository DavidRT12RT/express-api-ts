import "reflect-metadata";
import express, { Request, Response } from "express";
import userRoutes from "./routes/users.route";
import authRoutes from "./routes/auth.route";
import orderRoutes from "./routes/order.route";
import { AppDataSource } from "./db/data-source";
import cors from 'cors';
import morgan from "morgan";
import "dotenv/config";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json()); // -> Entender objectos JSON por el body del request
app.use(morgan("dev")); // -> Loggear las peticiones al servidor
app.use(cors()); // -> Permitir peticiones desde cualquier origen


app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api",orderRoutes);

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database Connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
}

main();

/*
  Anotaciones


  Por que trabajar con import?
  - Es la forma de importar modulos en ES6
  - Es la forma de importar modulos en Typescript
  - Es la forma de importar modulos en Node.js a partir de la version 13

  1.- Iniciar el proyecto con npm init -y
  2.- Configurar tsconfig.json en el proyecto con tsc --init (Typescript)
  3.- Instalar las dependencias necesarias
  5.- Crear la estructura de carpetas (routes,controllers,models)
  6.- Crear el archivo de entrada (index.ts)
  7.- Crear el data-source.ts para la conexion a la base de datos (TypeORM)

*/
