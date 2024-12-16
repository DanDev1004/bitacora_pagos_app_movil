import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Button, Image, Pressable } from 'react-native'
import useViewModel from './ViewModel';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';

export const ProfileInfoScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { user, removeUserSession } = useViewModel();

  useEffect(() => {
    if (user.session_token === '') {
      navigation.replace('HomeScreen');
    }
  }, [user])
  

  return (
    <View style={ styles.container }>

        <Image
            source={ require('../../../../../assets/images/city.jpg') } 
            style={ styles.imageBackground }
        />
        
        
        {/*Usar Pressable en caso de que TouchableOpacity no funcione */}
        <Pressable 
          style={ styles.logout }
          onPress={() => {
            removeUserSession();
          }}>
          <Image
                source={ require('../../../../../assets/icons/logout.png') } 
                style={ styles.logoutImage }
            />
        </Pressable>
        
      {/** 
        <Pressable 
          style={ styles.change }
          onPress={() => navigation.replace('RolesScreen')}>
          <Image
                source={ require('../../../../../assets/exchange.png') } 
                style={ styles.logoutImage }
            />
        </Pressable>
     */}
       
        <View style={ styles.logoContainer }>
            { 
              user?.imagen !== '' 
                &&
              <Image 
                source={{ uri: user?.imagen }}
                style={ styles.logoImage }
              />
            }
            
        </View>

        <View style={ styles.form }>
            <View style={ styles.formInfo }>
              <Image
                source={ require('../../../../../assets/icons/user.png')}
                style={ styles.formImage }
              />
              <View style={ styles.formContent }>
                <Text>{ user?.nombres } {user?.apellidos}</Text>
                <Text style={ styles.formTextDescription }>Nombre del usuario</Text>
              </View>
            </View>
            
            <View style={ {...styles.formInfo, marginTop: 25} }>
              <Image
                source={ require('../../../../../assets/icons/email.png')}
                style={ styles.formImage }
              />
              <View style={ styles.formContent }>
                <Text>{ user?.email }</Text>
                <Text style={ styles.formTextDescription }>Correo electronico</Text>
              </View>
            </View>

            <View style={ {...styles.formInfo, marginTop: 25, marginBottom: 70} }>
              <Image
                source={ require('../../../../../assets/icons/phone.png')}
                style={ styles.formImage }
              />
              <View style={ styles.formContent }>
                <Text>{ user?.telefono }</Text>
                <Text style={ styles.formTextDescription }>Telefono</Text>
              </View>
            </View>

            <RoundedButton
              Presionado={() => {
               navigation.navigate('ProfileUpdateScreen', { user: user! })
              }}
              texto='ACTUALIZAR INFORMACION' />

        </View>

    </View>
  )
}




{/* <Button 
  onPress={() => {
    removeSession();
    navigation.navigate('HomeScreen');
  }}
  title='Cerrar sesion'
/> */}