import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <Text>Página Detalhes do usuário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
