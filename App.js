import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/navigators/Stacks';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { CheckIcon } from 'native-base';

// const theme = extendTheme({
//   components: {
//     Select: {
//       minWidth: '200',
//       _selectedItem: {
//         bg: 'teal.600',
//         endIcon: <CheckIcon size="5" />,
//       },
//     },
//   },
// });

export default () => {
  return (
    <NativeBaseProvider>
      {/* <NavigationContainer theme={theme}> */}
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
