import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        // ? Removendo o Header do topo de todas as tabs
        headerShown: false,
        // ? Quando abrir um campo de input e o teclado for aberto o tab
        // ? fica escondido
        tabBarHideOnKeyboard: true,
        // ? Removendo o nome do icone
        tabBarShowLabel: false,
        // ? Mudando a cor do background da tab
        tabBarStyle: {
          backgroundColor: '#000000',
        },
        // ? Mudando a cor da tab ativa
        tabBarActiveTintColor: '#ffffff',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          // tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="file-text" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="phone-call" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
