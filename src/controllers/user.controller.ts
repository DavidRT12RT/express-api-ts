import { Request, RequestHandler, Response } from "express";
import { AppDataSource } from "../db/data-source";
import { User } from "../entities/user.entity";

const userRepository = AppDataSource.getRepository("User");

export const getUsers = async (req: Request, res: Response) => {
  const users = await userRepository.find();
  res.json({
    status: true,
    data: users,
    message: "Users indexed",
  });
};

export const getUserById = (req: Request, res: Response) => {
  res.send("User by id");
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User();
    const { name, email, password } = req.body;

    user.email = email;
    user.name = name;
    user.password = password;
    await userRepository.save(user);
    res.json({ user,status: true, message: "User created" });
  } catch (error) {
    if(error instanceof Error){
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

export const updateUser = async(req:Request,res:Response) => {

  const { id } = req.params;

  const { name, email, password } = req.body;
  const user = await userRepository.findOneBy({id});
  if(!user) return res.status(404).json({ status:false,message:"User not found!" });

  user.name = name ? name : user.name;
  user.email = email ? email : user.email;
  user.password = password ? password : user.password;
  await userRepository.save(user);  

  res.json({ status:true,message:"User updated successfully!" });


}

export const deleteUser = async(req:Request,res:Response) => { 
  const { id } = req.params;
  const user = await userRepository.findOneBy({id});
  if(!user) return res.status(404).json({ status:false,message:"User not found!" });
  await userRepository.remove(user);
  res.json({ status:true,message:"User deleted successfully!" });
}
