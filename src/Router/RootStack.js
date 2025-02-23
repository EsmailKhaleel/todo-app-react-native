import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home/Home';
import TodoDetails from '../Pages/TodoDetails/TodoDetails';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="TodoDetails" component={TodoDetails} />
    </Stack.Navigator>
  )
}

export default RootStack