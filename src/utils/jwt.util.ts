import { sign, verify } from "jsonwebtoken";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

const JWT_SECRET = process.env.JWT_SECRET || "Esta es mi clave Privada";

const generateToken = async (payload: JwtPayload) => {
  const jwt = sign(payload, JWT_SECRET!, {
    expiresIn: "24h",
  });
  return jwt;
};

const verifyToken = async (tokenToVerifiy: string) => {
  try {
    const payload = verify(tokenToVerifiy, JWT_SECRET);
    return payload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

export { generateToken, verifyToken };
