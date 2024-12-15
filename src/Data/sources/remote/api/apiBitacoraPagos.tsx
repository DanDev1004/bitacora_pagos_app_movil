import axios from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { User } from "../../../../Domain/entities/User";

const apiBitacoraPagos = axios.create({
    baseURL: 'http://192.168.1.13:3000/api',
    headers: {
        'Content-Type':'application/json'
    }
})

const apiBitacoraPagosForImage = axios.create({
    baseURL: 'http://192.168.1.13:3000/api',
    headers: {
        'Content-Type':'multipart/form-data',
        'accept': 'application/json'
    }
})

//INTERCEPTORS (FUNCIONA COMO UN MIDDLEWARE - ENVIAREMOS EL JWT A TRAVES DE LA PETICION)

apiBitacoraPagos.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('@user');
        if(data){
            const user: User = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.session_token!
        }
        return config;
    }
)

apiBitacoraPagosForImage.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('@user');
        if(data){
            const user: User = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.session_token!
        }
        return config;
    }
)

export {apiBitacoraPagos, apiBitacoraPagosForImage}