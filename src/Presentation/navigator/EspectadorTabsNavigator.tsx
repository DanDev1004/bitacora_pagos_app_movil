import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { EspectadorConceptoListScreen } from '../views/espectador/concepto/list/ConceptoList';
import { EspectadorAporteListScreen } from '../views/espectador/aporte/list/AporteList';

const Tab = createBottomTabNavigator();

export const EspectadorTabsNavigator = ()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="EspectadorConceptoListScreen" component={EspectadorConceptoListScreen} />
      <Tab.Screen name="EspectadorAporteListScreen" component={EspectadorAporteListScreen} />
      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
    </Tab.Navigator>
  );
}