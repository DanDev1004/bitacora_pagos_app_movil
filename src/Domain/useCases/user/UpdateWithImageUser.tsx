import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker';

const { updateWithImage } = new UserRepositoryImpl();

export const UpdateWithImageUserUseCase = async(user: User, file: ImagePicker.ImageInfo)=>{
    return await updateWithImage(user, file);
}