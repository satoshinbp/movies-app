import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';

const SearchStack = createNativeStackNavigator();

export default () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
};
