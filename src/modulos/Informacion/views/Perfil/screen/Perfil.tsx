import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InformacionStackParamList } from '../../../manager/ManPer';

type ConfigProps = NativeStackScreenProps<InformacionStackParamList, 'Configuracion1'>;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#EC5B70',
    paddingVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  }
})


const Configuracion1 = ({ navigation }: ConfigProps)=> {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text> Configuracion</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Configuracion2')}
          style={styles.button}>
          <Text style={styles.buttonText}> ir a configuracion2</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
};

export default Configuracion1;