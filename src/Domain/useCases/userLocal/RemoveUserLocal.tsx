import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";

const { remove } = new UserLocalRepositoryImpl();

export const RemoveUserLocalUseCase = async() =>{
    return await remove();
}