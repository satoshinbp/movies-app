import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import TVShows from '../screens/TVShows';
import Header from '../components/Header';

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { textTransform: 'none' },
          tabBarIndicatorStyle: { backgroundColor: '#2c3e50' },
        }}
      >
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="TV Shows" component={TVShows} />
      </Tab.Navigator>
    </>
  );
};
