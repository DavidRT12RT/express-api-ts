
import { registerNewUser,loginUser} from "../services/auth.service";
import { Request, RequestHandler, Response } from "express";

/* Los controladores son los encargados de recibir y responder , 
mas no hacer la logica de negocio 
*/ 

export const registerController = async ({body}:Request, res: Response) => {
  const newUser = await registerNewUser({email:body!.email,password:body!.password,name:body!.name});
  return res.json({
    data: newUser,
    status: true,
    message:"User created successfully"
  });
};

export const loginController = async(req: Request, res: Response) => { 
  const token = await loginUser({email:req.body.email,password:req.body.password,name:""});
  return res.json({
    data: token,
    status: true,
    message:"User logged"
  });
};
