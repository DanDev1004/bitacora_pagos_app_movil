import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/Presentation/navigator/MainStackNavigator';

const App = () => {

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;



//Usando EXPO framework que funciona como una capa adicional ya que usa React Native(el cual tambien es un framework)

// HOT RELOAD (React Native posee la cualidad de autorecargar los cambios en la app)

