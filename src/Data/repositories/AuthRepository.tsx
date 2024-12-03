import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { apiBitacoraPagos, apiBitacoraPagosForImage } from "../sources/remote/api/apiBitacoraPagos";
import { ResponseApiBitacoraPagos } from "../sources/remote/models/ResponseApiBitacoraPagos";
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';

export class AuthRepositoryImpl implements AuthRepository{

    async registerWithImage(user: User, file: ImagePicker.ImageInfo): Promise<ResponseApiBitacoraPagos> {
        try{
            let data = new FormData();
            // @ts-ignore
            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)! 
            })
            data.append('user', JSON.stringify(user));

            const response = await apiBitacoraPagosForImage.post<ResponseApiBitacoraPagos>('/users/crear-con-imagen', data);

            return Promise.resolve(response.data);
        }catch(error){
            let e = (error as AxiosError);
            console.log('ERROR: '+JSON.stringify(e.response?.data)); 
            
            const apiError: ResponseApiBitacoraPagos = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError);
        }
    }

    async register(user: User): Promise<ResponseApiBitacoraPagos> {
        try{
            const response = await apiBitacoraPagos.post<ResponseApiBitacoraPagos>('/users/crear', user);
            return Promise.resolve(response.data);
        }catch(error){
            let e = (error as AxiosError);
            console.log('ERROR: '+JSON.stringify(e.response?.data)); 
            
            const apiError: ResponseApiBitacoraPagos = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError);
        }
    }

    async login(email: string, password: string): Promise<ResponseApiBitacoraPagos> {
        try{
            const response = await apiBitacoraPagos.post<ResponseApiBitacoraPagos>('/users/login', {
                email: email,
                password: password
            });
            return Promise.resolve(response.data);
        }catch(error){
            let e = (error as AxiosError);
            console.log('ERROR: '+JSON.stringify(e.response?.data)); 
            
            const apiError: ResponseApiBitacoraPagos = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError);
        }
    }

 
    
    
}