import { NextFunction, Request, Response } from "express";

const logMiddleware = (req:Request,res:Response,next:NextFunction) => {
  //next -> continuar a la siguiente funcion
  const userAgent = req.headers["user-agent"]; // -> Navegador que la persona esta utilizando
  console.log(`Request received from ${userAgent}`);
  next();
}

/* 
  El middleware nos sirve para interceptar peticiones.
*/

export default logMiddleware;