import { ResponseApiBitacoraPagos } from "../../Data/sources/remote/models/ResponseApiBitacoraPagos";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface UserRepository{
    update(user: User): Promise<ResponseApiBitacoraPagos>
    updateWithImage(user: User, file: ImagePicker.ImageInfo): Promise<ResponseApiBitacoraPagos>
}