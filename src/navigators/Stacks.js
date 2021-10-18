import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './Tabs'
import Movie from '../screens/Movie'

const MoviesStack = createNativeStackNavigator()

export default () => {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <MoviesStack.Screen name="Movie" component={Movie} options={({ route }) => ({ title: route.params.title })} />
    </MoviesStack.Navigator>
  )
}
