import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import a from '../../screen/a';

const Tab = createBottomTabNavigator();

function NavigationTabs() {
  return (
    <Tab.Navigator> 
      <Tab.Screen 
      name="a" 
      component={a} />

    </Tab.Navigator>
  );
}

export default NavigationTabs;