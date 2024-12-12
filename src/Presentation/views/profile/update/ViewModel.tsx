import React, { useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { UpdateUserUseCase } from '../../../../Domain/useCases/user/UpdateUser';
import { UpdateWithImageUserUseCase } from '../../../../Domain/useCases/user/UpdateWithImageUser';
import { User } from '../../../../Domain/entities/User';
import { ResponseApiBitacoraPagos } from '../../../../Data/sources/remote/models/ResponseApiBitacoraPagos';
import { UserContext } from '../../../context/UserContext';

const ProfileUpdateViewModel = (user: User) => {

    const [values, setValues] = useState(user);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImageInfo>()
    const { getUserSession } = useUserLocal();
    const { saveUserSession } = useContext( UserContext );

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if(!result.canceled){
            // file://ksdajkaskj.png
            onChange('imagen', result.assets[0].uri); 
            setFile(result.assets[0]);
        }
    }
    
    const takePhoto = async () => {
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

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }
    
    const onChangeInfoUpdate = (nombres: string, apellidos: string, telefono: string) => {
        setValues({ ...values, nombres, apellidos, telefono})
    }

    const update = async () => {
        if (isValidForm()) {
            setLoading(true);
            
            let response  = {} as ResponseApiBitacoraPagos;

            if (values.imagen?.includes('https://')) {
                response = await UpdateUserUseCase(values);
            }
            else {
                response = await UpdateWithImageUserUseCase(values, file!);
            }
            
            setLoading(false);
            console.log('RESULTADO: ' + JSON.stringify(response));        
            if (response.success) {
                saveUserSession(response.data);
                setSuccessMessage(response.message);
            }
            else {
                setErrorMessage(response.message);
            }
        }
    }

    const isValidForm = (): boolean => {
        if (values.nombres === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.apellidos === '') {
            setErrorMessage('Ingresa tu apellido');
            return false;
        }
        if (values.telefono === '') {
            setErrorMessage('Ingresa tu telefono');
            return false;
        }
        
        return true;
    }

    return {
        ...values,
        onChange,
        update,
        pickImage,
        takePhoto,
        onChangeInfoUpdate,
        errorMessage,
        successMessage,
        loading,
        user
    }
}

export default ProfileUpdateViewModel;
