import React, { useEffect, useState } from 'react'
import { Text, View, Image, StatusBar, ScrollView, ToastAndroid, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';
import { ModalPickImage } from '../../components/ModalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { COLORS } from '../../theme/AppTheme';


interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { };
export const RegisterScreen = ({ navigation, route }: Props) => {

    const { nombres, apellidos, email, imagen, telefono, password, confirmPassword, errorMessage, user, loading,
        onChange, registrar, PickImage, takePhoto,
    } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (errorMessage != '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])

    useEffect(() => {
        if (user?.session_token !== null && user?.session_token !== undefined) {
            navigation.replace('ProfileInfoScreen');
        }
    }, [user])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="black" />

            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    {
                        imagen == ''
                            ?
                            <Image
                                source={require('../../../../assets/icons/user_image.png')}
                                style={styles.logoImage}
                            />
                            :
                            <Image
                                source={{ uri: imagen }}
                                style={styles.logoImage}
                            />
                    }

                </TouchableOpacity>
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
                            Presionado={() => { registrar() }}
                        />
                    </View>

                </ScrollView>
            </View>

            <ModalPickImage
                openGallery={PickImage}
                openCamera={takePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />

            {
                loading &&
                    <ActivityIndicator
                        style={styles.loading} 
                        size="large" 
                        color={COLORS.azul}
                    />
            }
        </View>
    );
}


