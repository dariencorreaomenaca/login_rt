import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Configuracion1 from '../views/Perfil/screen/Perfil';
import Configuracion2 from '../views/Configuracion/screen/Configuracion2';

export type InformacionStackParamList ={
  Configuracion1: undefined;
  Configuracion2: undefined;
  Configuracion3: undefined;
}

const Stack = createNativeStackNavigator<InformacionStackParamList>();

const Informacion = () => {
  return (
    <Stack.Navigator initialRouteName='Configuracion1'>
      <Stack.Screen name="Configuracion1" component={Configuracion1}></Stack.Screen>
      <Stack.Screen name="Configuracion2" component={Configuracion2}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default Informacion;