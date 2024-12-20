// ? Aulas Introdução a Navegação e Evoluindo nas Navegações

import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

export default function Sobre() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome,
    });
  });

  return (
    <View style={styles.container}>
      <Text>Tela Sobre</Text>
      <Text>{route.params?.email}</Text>
      <Text>{route.params?.nome}</Text>

      <View style={styles.btnRoute}>
        <Button
          title="Ir para a tela de contato"
          onPress={() => navigation.navigate('Contato')}
        />
      </View>

      <View style={styles.btnRoute}>
        <Button title="Voltar tela" onPress={() => navigation.goBack()} />
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
