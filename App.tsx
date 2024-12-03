import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';

import { StatusBar } from 'react-native';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  ProfileInfoScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {/*Cada Stack se renderiza por orden */}

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Nuevo usuario'
          }}
        />

        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



//Usando EXPO framework que funciona como una capa adicional ya que usa React Native(el cual tambien es un framework)

// HOT RELOAD (React Native posee la cualidad de autorecargar los cambios en la app)

