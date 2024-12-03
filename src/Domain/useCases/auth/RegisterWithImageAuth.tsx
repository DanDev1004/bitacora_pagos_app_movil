import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entities/User";
import * as ImagePicker from 'expo-image-picker';

const { registerWithImage } = new AuthRepositoryImpl();

export const RegisterWithImageAuthUseCase = async (user: User, file: ImagePicker.ImageInfo) =>{
    return await registerWithImage(user, file);
}