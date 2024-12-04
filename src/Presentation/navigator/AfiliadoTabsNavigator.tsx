import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { AfiliadoConceptoListScreen } from '../views/afiliado/concepto/list/ConceptoList';
import { AfiliadoAporteListScreen } from '../views/afiliado/list/AporteList';

const Tab = createBottomTabNavigator();

export const AfiliadoTabsNavigator = ()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="AfiliadoConceptoListScreen" component={AfiliadoConceptoListScreen} />
      <Tab.Screen name="AfiliadoAporteListScreen" component={AfiliadoAporteListScreen} />
      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
    </Tab.Navigator>
  );
}