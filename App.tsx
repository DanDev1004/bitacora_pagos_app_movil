import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreem } from './src/Presentation/views/home/Home';
import { RegisterScreem } from './src/Presentation/views/register/Register';

import { StatusBar } from 'react-native';

export type RootStackParamList = {
  HomeScreem: undefined,
  RegisterScreem: undefined
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
          name="HomeScreem"
          component={HomeScreem}
        />

        <Stack.Screen
          name="RegisterScreem"
          component={RegisterScreem}
          options={{
            headerShown: true,
            title: 'Nuevo usuario'
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



//Usando EXPO framework que funciona como una capa adicional ya que usa React Native(el cual tambien es un framework)

// HOT RELOAD (React Native posee la cualidad de autorecargar los cambios en la app)

