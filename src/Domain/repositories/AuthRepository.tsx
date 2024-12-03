import { ResponseApiBitacoraPagos } from "../../Data/sources/remote/models/ResponseApiBitacoraPagos";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository{
    registerWithImage(user: User, file: ImagePicker.ImageInfo): Promise<ResponseApiBitacoraPagos>;
    register(user: User): Promise<ResponseApiBitacoraPagos>;
    login(email: String, password: string): Promise<ResponseApiBitacoraPagos>;
}