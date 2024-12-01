import React, { useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';

import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

export const HomeScreem = () => {

    const { email, password, errorMessage,
            onChange, login 
        } = useViewModel();

    const navegacion = useNavigation<StackNavigationProp<RootStackParamList>>()

    useEffect(() => {
        if(errorMessage!=''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])

    

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
                    <TouchableOpacity onPress={() => navegacion.navigate('RegisterScreem')}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}



