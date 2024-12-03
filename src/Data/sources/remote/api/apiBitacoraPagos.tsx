import axios from "axios";

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

export {apiBitacoraPagos, apiBitacoraPagosForImage}