import { AppDataSource } from "../db/data-source";
import { User } from "../entities/user.entity";
import { Auth } from "../interfaces/auth.interface";
import { generateToken } from "../utils/jwt.util";
import { encryPassword, verifyPassword } from "../utils/password.util";

const userRepository = AppDataSource.getRepository("User");

const registerNewUser = async(authUser:Auth) => {
  const checkIsUserExist = await userRepository.findOne({where:{email:authUser.email}});

  if(checkIsUserExist){
    return { message:"User already exist" };
  }

  const newUser = new User();
  newUser.email = authUser.email;
  newUser.password = await encryPassword(authUser.password);
  newUser.name = authUser.name;
  await userRepository.save(newUser);

  const token = generateToken({
    email:newUser.email,
    name:newUser.name,
    id:`${newUser.id}`
  });

  return token;
};

const loginUser = async ({email,password}:Auth) => {
  const user = await userRepository.findOne({where:{email:email}});
  if(!user) return {message:"User does not exist"};

  const isPasswordCorrect = await verifyPassword(password,user.password);

  if(!isPasswordCorrect) return {message:"Password is incorrect"};

  const token = generateToken({
    email:user.email,
    name:user.name,
    id:user.id
  });

  return token;
}

export { registerNewUser,loginUser };
