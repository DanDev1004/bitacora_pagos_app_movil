import React, { useEffect } from 'react'
import { Text, View, Image, StatusBar, ScrollView, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';


import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

export const RegisterScreem = () => {

    const { nombres, apellidos, email, telefono, password, confirmPassword, errorMessage, 
            onChange, registrar
         } = useViewModel();

    useEffect(() => {
        if(errorMessage!=''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="black" />

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/icons/user_image.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SELECCIONE UNA IMAGEN</Text>
            </View>

            <View style={styles.form}>

                <ScrollView>

                    <Text style={styles.formText}>REGISTRARSE</Text>

                    <CustomTextInput
                        image={require('../../../../assets/icons/user.png')}
                        placeholder='Nombres'
                        KeyboardType='default'
                        property='nombres'
                        value={nombres}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/icons/my_user.png')}
                        placeholder='Apellidos'
                        KeyboardType='default'
                        property='apellidos'
                        value={apellidos}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/icons/email.png')}
                        placeholder='Correo electronico'
                        KeyboardType='email-address'
                        property='email'
                        value={email}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/icons/phone.png')}
                        placeholder='telefono'
                        KeyboardType='numeric'
                        property='telefono'
                        value={telefono}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/icons/password.png')}
                        placeholder='Contraseña'
                        KeyboardType='default'
                        secureTextEntry={true}
                        property='password'
                        value={password}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/icons/confirm_password.png')}
                        placeholder='confirmar contraseña'
                        KeyboardType='default'
                        secureTextEntry={true}
                        property='confirmPassword'
                        value={confirmPassword}
                        onChangeText={onChange}
                    />

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton
                            texto='CONFIRMAR'
                            Presionado={() => {registrar()}}
                        />
                    </View>

                </ScrollView>
            </View>

        </View>
    );
}


