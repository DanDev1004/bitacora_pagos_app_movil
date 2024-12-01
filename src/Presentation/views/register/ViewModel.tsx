import React, {useState} from 'react'
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';


const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [values, setValues] = useState({
        nombres: '',
        apellidos: '',
        telefono: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChange = (property: string, value: any) =>{
        setValues({ 
            ...values, 
            [property]: value 
        }); 
    }

    const registrar = async () => {
        if(isValidForm()){
            const response = await RegisterAuthUseCase(values);
            console.log("RESPONSE: "+JSON.stringify(response));
        }
    }

    const isValidForm = ():boolean => {
        if(values.nombres===''){
            setErrorMessage('Ingresa tu nombre');
            return false;
        }

        if(values.apellidos===''){
            setErrorMessage('Ingresa tus apellidos');
            return false;
        }

        if(values.email===''){
            setErrorMessage('Ingresa tu email');
            return false;
        }

        if(values.password===''){
            setErrorMessage('Ingresa tu contraseña');
            return false;
        }

        if(values.confirmPassword===''){
            setErrorMessage('Ingresa la confirmación de la contraseña');
            return false;
        }

        if(values.password != values.confirmPassword){
            setErrorMessage('Las contraseñas no coinciden');
            return false;
        }
        
        return true;
    }

    return { 
        ...values,
        onChange,
        registrar,
        errorMessage 
    }
}

export default RegisterViewModel; 