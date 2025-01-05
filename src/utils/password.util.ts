import { hash,compare } from "bcryptjs";

const encryPassword = async(passwordPlain:string) => {
  const passwordHash = await hash(passwordPlain,10);
  return passwordHash;
}

const verifyPassword = async(passwordPlain:string,passwordEncrypted:string) => {
  const isCorrect = await compare(passwordPlain,passwordEncrypted);
  return isCorrect;
}

export { encryPassword, verifyPassword };