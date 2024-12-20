import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
          name="Home"
          component={Home}
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
    </NavigationContainer>
  );
}
