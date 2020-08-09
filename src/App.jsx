// In App.js in a new project

import * as React from 'react';
import { Image, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home'; 
import Login from './screens/Login';


const Stack = createStackNavigator();

const state = {
  userToken: null,
  isSignout: true,
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.userToken == null ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;