import { Request, Response } from "express";
import { RequestExtends } from "../middleware/session";
import { saveFileAndRegisterDocument } from "../utils/storage.util";

export const getOrders = async(req:RequestExtends,res:Response) => {
  try {

    const user = req.user;
    res.send({
      data:`Bienvenido a ordenes ${user?.name} ${user?.email} ${user?.id}`
    });
  } catch (error) {
    res.send({data:"Error!"});
  }
}

export const createOrder = async(req:RequestExtends,res:Response) => {

  try {
    const file = req.file;
    const user = req.user;
    if(!file) return res.status(400).send({message:"Sin archivo para la orden!"});
    if(!user) return res.status(400).send({message:"Usuario no encontrado!"});
    const result = await saveFileAndRegisterDocument({file,idUser:user?.id});

    //Logica para guarda la orden en la DB (entidad Orden)
    //Orden.name = "algo";

    res.send("Orden guardada!");

  } catch (error) {
    
  }


}