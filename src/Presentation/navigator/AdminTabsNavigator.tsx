import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminConceptoListScreen } from '../views/admin/concepto/list/ConceptoList';
import { AdminAporteListScreen } from '../views/admin/aporte/list/AporteList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = ()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="AdminConceptoListScreen" 
      component={AdminConceptoListScreen} 
      options={{
        title: 'Conceptos',
        tabBarLabel: 'Conceptos',
        //headerShown: false, //para que no se muestre la barra de titulo de arriba
        tabBarIcon: ({ color })=>(
          <Image
          source={require('../../../assets/icons/list.png')}
          style={{width:25, height:25}}
          />
        )
      }}
      />

      <Tab.Screen 
      name="AdminAporteListScreen" 
      component={AdminAporteListScreen} 
      options={{
        title: 'Salidas',
        tabBarLabel: 'Salidas',
        tabBarIcon: ({ color })=>(
          <Image
          source={require('../../../assets/icons/price.png')}
          style={{width:25, height:25}}
          />
        )
      }}
      />

      <Tab.Screen 
      name="ProfileInfoScreen" 
      component={ProfileInfoScreen} 
      options={{
        title: 'Perfil',
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color })=>(
          <Image
          source={require('../../../assets/icons/user_menu.png')}
          style={{width:25, height:25}}
          />
        )
      }}
      />

    </Tab.Navigator>
  );
}