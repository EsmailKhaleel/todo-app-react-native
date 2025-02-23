import React from 'react';
import RootStack from './src/Router/RootStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  )
}

export default App;