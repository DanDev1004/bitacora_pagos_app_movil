import React, { useEffect, useState } from 'react'
import { Image, ActivityIndicator, View, Text, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';
import { CustomTextInput } from '../../../components/CustomTextInput';
import { RoundedButton } from '../../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Styles';
import { ModalPickImage } from '../../../components/ModalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { COLORS } from '../../../theme/AppTheme';
import { RootStackParamList } from '../../../../../App';


interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'>{};

export const ProfileUpdateScreen = ({navigation, route}: Props) => {

  const { user } = route.params;
  const { nombres, apellidos, imagen, telefono, loading, errorMessage, successMessage, onChange, onChangeInfoUpdate, update, pickImage, takePhoto } = useViewModel(user);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])
  
  useEffect(() => {
    if (successMessage != '') {
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage])

 
  return (
    <View style={styles.container}>

        <Image
          source={ require('../../../../../assets/images/city.jpg') } 
          style={ styles.imageBackground }
          />

        <View style={ styles.logoContainer }>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {
              imagen == ''
              ? <Image 
                  source={{ uri: user?.imagen }}
                  style={ styles.logoImage }
              />
              : <Image 
                  source={{ uri: imagen }}
                  style={ styles.logoImage }
                />
            }
            
          </TouchableOpacity>

          <Text style={ styles.logoText }>SELECCIONA UNA IMAGEN</Text>
        </View>

        <View style={ styles.form }>

          <ScrollView>

            <Text style={ styles.formText }>ACTUALIZAR</Text>

            <CustomTextInput 
              placeholder='Nombres'
              KeyboardType='default'
              image={ require('../../../../../assets/icons/user.png') }
              property='nombres'
              onChangeText={ onChange }
              value={ nombres }
              />


            <CustomTextInput 
              placeholder='Apellidos'
              KeyboardType='default'
              image={ require('../../../../../assets/icons/my_user.png') }
              property='apellidos'
              onChangeText={ onChange }
              value={ apellidos }
              />
            
            
            <CustomTextInput 
              placeholder='Telefono'
              KeyboardType='numeric'
              image={ require('../../../../../assets/icons/phone.png') }
              property='telefono'
              onChangeText={ onChange }
              value={ telefono }
              />

            <View style={{ marginTop: 30 }}>
                
                <RoundedButton texto='CONFIRMAR' Presionado={ () => update()} />

            </View>

          </ScrollView>

        </View>
        

        <ModalPickImage
          openGallery={ pickImage }
          openCamera={ takePhoto }
          modalUseState={ modalVisible }
          setModalUseState={ setModalVisible }
          />

        {
          loading && 
          <ActivityIndicator 
            style={styles.loading} 
            size="large" 
            color={ COLORS.azul }  
          />
        }
        

    </View>
    );
}
    

    
