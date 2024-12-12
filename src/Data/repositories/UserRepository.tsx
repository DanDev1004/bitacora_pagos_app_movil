import { ImageInfo } from 'expo-image-picker';
import { User } from '../../Domain/entities/User';
import { UserRepository } from '../../Domain/repositories/UserRepository';
import { ResponseApiBitacoraPagos } from '../sources/remote/models/ResponseApiBitacoraPagos';
import { AxiosError } from 'axios';
import { apiBitacoraPagos, apiBitacoraPagosForImage } from '../sources/remote/api/apiBitacoraPagos';
import mime from 'mime';

export class UserRepositoryImpl implements UserRepository{

    async update(user: User): Promise<ResponseApiBitacoraPagos> {
        try{
            const response = await apiBitacoraPagos.put<ResponseApiBitacoraPagos>('users/update-sin-imagen', user);
            return Promise.resolve(response.data);
        }catch(error){
            let e = (error as AxiosError);
            console.log('ERROR: '+JSON.stringify(e.response?.data)); 
            
            const apiError: ResponseApiBitacoraPagos = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError);
        }
    }
    async updateWithImage(user: User, file: ImageInfo): Promise<ResponseApiBitacoraPagos> {
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

            const response = await apiBitacoraPagosForImage.put<ResponseApiBitacoraPagos>('/users/update', data);

            return Promise.resolve(response.data);
        }catch(error){
            let e = (error as AxiosError);
            console.log('ERROR: '+JSON.stringify(e.response?.data)); 
            
            const apiError: ResponseApiBitacoraPagos = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError);
        }
    }
    
}