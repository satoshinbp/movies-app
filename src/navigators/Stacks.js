import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Detail from '../screens/Detail';

const MoviesStack = createNativeStackNavigator();

export default () => {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <MoviesStack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.title })} />
    </MoviesStack.Navigator>
  );
};
