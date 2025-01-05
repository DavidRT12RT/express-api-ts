import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.util";
import { JwtPayload } from '../interfaces/jwt-payload.interface';

export interface RequestExtends extends Request {
  user?:JwtPayload;
};

const checkJwt = async (req: RequestExtends, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization || "";
    const jwtToken = authHeader.split(" ").pop();

    if (!jwtToken) {
      throw new Error("Token not provided");
    }
    const payload = await verifyToken(`${jwtToken}`);
    //@ts-ignore
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({
      message: error instanceof Error ? error.message : "Not authorized",
    });
  }
};



export { checkJwt };
