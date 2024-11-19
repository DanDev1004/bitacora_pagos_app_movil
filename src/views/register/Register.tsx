import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { COLORS } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App';

export const RegisterScreem = () => {

    const navegacion = useNavigation<StackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="black" />

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/icons/user_image.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SELECCIONE UNA IMAGEN</Text> 
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../assets/icons/user.png')}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Nombres'
                        keyboardType='default'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../assets/icons/my_user.png')}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Apellidos'
                        keyboardType='default'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../assets/icons/email.png')}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Correo electronico'
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../assets/icons/phone.png')}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='telefono'
                        keyboardType='numeric'
                    />
                </View>
                

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../assets/icons/password.png')}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../assets/icons/confirm_password.png')}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='confirmar contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        texto='CONFIRMAR'
                        Presionado={() => ToastAndroid.show('Holaaa', ToastAndroid.SHORT)}
                    />
                </View>

            </View>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.azul,
    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16

    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 10
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 25
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gris,
        marginLeft: 15
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: COLORS.azul_pastel,
        borderBottomWidth: 1,
        borderBottomColor: 'bold',
        marginLeft: 10
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold'
    },

});