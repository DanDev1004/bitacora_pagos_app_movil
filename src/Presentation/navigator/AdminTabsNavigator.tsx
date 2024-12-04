import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminConceptoListScreen } from '../views/admin/concepto/list/ConceptoList';
import { AdminAporteListScreen } from '../views/admin/aporte/list/AporteList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = ()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="AdminConceptoListScreen" component={AdminConceptoListScreen} />
      <Tab.Screen name="AdminAporteListScreen" component={AdminAporteListScreen} />
      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
    </Tab.Navigator>
  );
}