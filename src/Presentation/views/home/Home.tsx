import React, { useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';

import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> { };
export const HomeScreen = ({ navigation, route }: Props) => {

    const { email, password, errorMessage, user,
        onChange, login
    } = useViewModel();


    useEffect(() => {
        if (errorMessage != '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])

    useEffect(() => {
        if (user?.session_token !== null && user?.session_token !== undefined) {
            //el metodo replace establece como pantalla principal, de manera que si el usuario quiere retroceder una vez logeado, ya no aparezca la view de login, porque elimina el historial de pantallas
            const userRoles = user?.roles || [];
            const AdminrRol = userRoles.some(rol => rol.name === "ADMIN");
            const AfiliadoRol = userRoles.some(rol => rol.name === "AFILIADO");
            const EspectadorRol = userRoles.some(rol => rol.name === "ESPECTADOR");

            console.log("Roles:", { AdminrRol, AfiliadoRol, EspectadorRol })

            if (AdminrRol) {
                navigation.replace('AdminTabsNavigator');
            } else if (AfiliadoRol) {
                navigation.replace('AfiliadoTabsNavigator');
            } else if (EspectadorRol) {;
                navigation.replace('EspectadorTabsNavigator');
            }
        }

    }, [user])




    return (
        <View style={styles.container}>

            {/*
          <Image
            source={require('./assets/images/chef.jpg')}
            style={styles.ImageBackground}
          />
          */}

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/icons/logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>REGISTRO DE PAGOS</Text> {/*LOG PAY */}
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>

                <CustomTextInput
                    image={require('../../../../assets/icons/email.png')}
                    placeholder='Correo electronico'
                    KeyboardType='email-address'
                    property='email'
                    value={email}
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

                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        texto='LOGIN'
                        Presionado={() => {
                            login()
                            /*
                            console.log('Email: ' + email);
                            console.log('password: ' + password);
                            */
                        }}
                    />
                    {/*
              <Button
                title='ENTRAR'
                onPress={() => ToastAndroid.show('mensajitooo', ToastAndroid.LONG)}
              />
              */}
                </View>

                <View style={styles.formRegister}>
                    <Text>No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}



