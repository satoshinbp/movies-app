import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/navigators/Stacks';
import { NativeBaseProvider } from 'native-base';

export default () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
