import { AppDataSource } from "../db/data-source";
import { Document } from "../entities/document.entity";
import { User } from "../entities/user.entity";
import { writeFile } from "fs/promises";
import path from "path";

const documentRepository = AppDataSource.getRepository(Document);
const userRepository = AppDataSource.getRepository(User);

interface StorageParams {
  file: Express.Multer.File;
  idUser: string;
}

// Guarda el archivo en el sistema y lo registra en la DB
const saveFileAndRegisterDocument = async ({ file, idUser }: StorageParams) => {
  try {
    const fileName = file.originalname;
    const filePath = path.resolve(process.cwd(), "storage", fileName);

    // Guardar archivo en el sistema de archivos
    await writeFile(filePath, file.buffer);

    // Registrar documento en la base de datos
    const user = await userRepository.findOneBy({ id: idUser });
    if (!user) throw new Error("Usuario no encontrado");

    const document = new Document();
    document.fileName = fileName;
    document.path = filePath;
    document.user = user;

    await documentRepository.save(document);

    return { message: "Archivo y documento guardados con éxito", fileName };
  } catch (error) {
    throw new Error("Error guardando archivo o documento");
  }
};

export { saveFileAndRegisterDocument };
