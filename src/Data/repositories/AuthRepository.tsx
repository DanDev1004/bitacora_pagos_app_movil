import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { apiBitacoraPagos } from "../sources/remote/api/apiBitacoraPagos";
import { ResponseApiBitacoraPagos } from "../sources/remote/models/ResponseApiBitacoraPagos";

export class AuthRepositoryImpl implements AuthRepository{

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

    async login(email: string, passwod: string): Promise<ResponseApiBitacoraPagos> {
        try{
            const response = await apiBitacoraPagos.post<ResponseApiBitacoraPagos>('/users/login', {
                email: email,
                passwod: passwod
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