import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function navegaSobre() {
    navigation.navigate('Sobre', {nome: 'Matheus', email: 'matheus@teste.com'});
  }

  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <View style={styles.btnRoute}>
        <Button title="Ir para o sobre" onPress={navegaSobre} />
      </View>

      <View style={styles.btnRoute}>
        <Button
          title="Ir para a tela de contato"
          onPress={() => navigation.navigate('Contato')}
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
