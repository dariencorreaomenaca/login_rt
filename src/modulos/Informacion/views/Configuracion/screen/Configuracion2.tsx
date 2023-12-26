import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuthentication } from '../../../../../login/hooks/useAuthentication';


export default function Configuracion2() {
  const {signOut} = useAuthentication();
  const onHandlerSignOut = () =>{
    signOut();
}
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configuracion 2...</Text>
    
      <Button title="Salir" color="#EC5B70" onPress={onHandlerSignOut}/>
    </View>
  );
}