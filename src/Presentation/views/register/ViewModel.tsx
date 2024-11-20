import React, {useState} from 'react'
import { apiBitacoraPagos } from '../../../Data/sources/remote/api/apiBitacoraPagos';
apiBitacoraPagos 

const RegisterViewModel = () => {

    const [values, setValues] = useState({
        nombres: '',
        apellidos: '',
        telefono: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChange = (property: string, value: any) =>{
        setValues({ ...values, [property]: value }); 
    }

    const registrar = async () => {
        try{
            const response = await apiBitacoraPagos.post('/users/crear', values);
            console.log('response: '+ JSON.stringify(response.data));
        }catch(error){
            console.log('error: '+error)
        }

    }

    return { 
        ...values,
        onChange,
        registrar 
    }
}

export default RegisterViewModel; 