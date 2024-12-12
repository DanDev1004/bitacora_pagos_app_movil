import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";

const { update } = new UserRepositoryImpl();

export const UpdateUserUseCase = async(user: User)=>{
    return await update(user);
}