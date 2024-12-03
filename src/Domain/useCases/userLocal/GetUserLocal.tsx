import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";

const { getUser } = new UserLocalRepositoryImpl();

export const GetUserLocalUseCase = async() =>{
    return await getUser();
}