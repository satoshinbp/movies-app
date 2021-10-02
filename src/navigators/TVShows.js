import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TVShowsScreen from '../screens/TVShows';

const TVShowsStack = createNativeStackNavigator();

export default () => {
  return (
    <TVShowsStack.Navigator>
      <TVShowsStack.Screen name="TV Shows" component={TVShowsScreen} />
    </TVShowsStack.Navigator>
  );
};
