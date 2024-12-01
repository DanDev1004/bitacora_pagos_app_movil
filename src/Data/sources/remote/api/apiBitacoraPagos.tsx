import axios from "axios";

const apiBitacoraPagos = axios.create({
    baseURL: 'http://192.168.1.12:3000/api',
    headers: {
        'Content-Type':'application/json'
    }
})

export {apiBitacoraPagos}