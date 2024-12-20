// ? Aulas Introdução a Navegação e Evoluindo nas Navegações

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Contato() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página de Contato</Text>

      <View style={styles.btnRoute}>
        <Button
          title="Ir para a Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRoute: {
    marginTop: 10,
  },
});
