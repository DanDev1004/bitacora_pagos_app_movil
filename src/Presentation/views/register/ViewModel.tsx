import React, {useState} from 'react'
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';


import * as ImagePicker from 'expo-image-picker';

const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [values, setValues] = useState({
        nombres: '',
        apellidos: '',
        telefono: '',
        email: '',
        imagen: '',
        password: '',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<ImagePicker.ImageInfo>()
    const { user, getUserSession } = useUserLocal();

    const PickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if(!result.canceled){
            onChange('imagen', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const takePhoto = async ()=>{
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if(!result.canceled){
            onChange('imagen', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const onChange = (property: string, value: any) =>{
        setValues({ 
            ...values, 
            [property]: value 
        }); 
    }

    const registrar = async () => {
        if(isValidForm()){
            setLoading(true);
            // const response = await RegisterAuthUseCase(values);
            const response = await RegisterWithImageAuthUseCase(values,file!);
            setLoading(false);
            console.log("RESPONSE: "+JSON.stringify(response));

            if(response.success){
                await SaveUserLocalUseCase(response.data);
                getUserSession();
            }
            else{
                setErrorMessage(response.message);
            }
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

        if(values.imagen ===''){
            setErrorMessage('Selecciona una imagen');
            return false;
        }
        
        return true;
    }

    return { 
        ...values,
        onChange,
        registrar,
        PickImage,
        takePhoto,
        errorMessage,
        user,
        loading
    }
}

export default RegisterViewModel; 