import React, { useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';

const HomeViewModel = () => {

    //ya no aplicaremos un useState por cada input, sino que vamos a utilizar un objeto para recorrer cada estado
    const [errorMessage, setErrorMessage] = useState("");
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value }); //desestructurando: ...values = values.email, values.password
    }

    const login = async () => {
        if(isValidForm()) {
            const response = await LoginAuthUseCase(values.email, values.password);
            console.log("RESPONSE: " + JSON.stringify(response));
            
            if(!response.success) setErrorMessage(response.message);
        }
    }

    const isValidForm = (): boolean => {
        if (values.email === '') {
            setErrorMessage('Ingresa el email');
            return false;
        }

        if (values.password === '') {
            setErrorMessage('Ingresa la password');
            return false;
        }
        return true;
    }

    return { //retornando un objeto
        ...values,
        onChange,
        login,
        errorMessage
    }
}

export default HomeViewModel