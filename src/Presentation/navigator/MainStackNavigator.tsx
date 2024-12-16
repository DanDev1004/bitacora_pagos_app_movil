import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import { HomeScreen } from '../views/home/Home';
import { RegisterScreen } from '../views/register/Register';
import { AdminTabsNavigator } from './AdminTabsNavigator';
import { EspectadorTabsNavigator } from './EspectadorTabsNavigator';
import { AfiliadoTabsNavigator } from './AfiliadoTabsNavigator';
import { ProfileUpdateScreen } from '../views/profile/update/ProfileUpdate';
import { User } from '../../Domain/entities/User';
import { UserProvider } from '../context/UserContext';
import React from 'react';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  AdminTabsNavigator: undefined,
  AfiliadoTabsNavigator: undefined,
  EspectadorTabsNavigator: undefined,
  ProfileUpdateScreen: { user: User }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <UserState>
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
          name="AdminTabsNavigator"
          component={AdminTabsNavigator}
        />

        <Stack.Screen
          name="AfiliadoTabsNavigator"
          component={AfiliadoTabsNavigator}
        />

        <Stack.Screen
          name="EspectadorTabsNavigator"
          component={EspectadorTabsNavigator}
        />

        <Stack.Screen
          name="ProfileUpdateScreen"
          component={ProfileUpdateScreen}
          options={{
            headerShown: true,
            title: 'Actualizar usuario'
          }}
        />
      </Stack.Navigator>
    </UserState>
  );
};

const UserState = ({ children }: any) => {
  console.log("Rendering UserProvider");
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}


