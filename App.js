import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaLogin from './src/pages/TelaLogin/index';
import Tarefa from './src/pages/Tarefa/index';
import Aplicativo from './src/pages/Aplicativo/index';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Aplicativo" component={Aplicativo} />
          <Stack.Screen name="TelaLogin" component={TelaLogin} options={{headerShown: false}}/>
          <Stack.Screen name="Tarefa" component={Tarefa} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}