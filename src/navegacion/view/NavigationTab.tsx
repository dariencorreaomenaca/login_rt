import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Informacion from '../../modulos/Informacion/manager/ManPer';
import Calendario from '../../modulos/Calendario/manager/ManCal';
import Interacciones from '../../modulos/Interacciones/manager/ManInt';

const Tab = createBottomTabNavigator();

function NavigationTabs() {
  return (
    <Tab.Navigator> 
      <Tab.Screen 
      name="Buscador" 
      component={Interacciones} />

      <Tab.Screen 
      name="Perfil" 
      component={Informacion} />

      <Tab.Screen 
      name="Calendario" 
      component={Calendario} />
    </Tab.Navigator>
  );
}

export default NavigationTabs;