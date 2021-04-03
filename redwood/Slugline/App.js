import 'react-native-gesture-handler';

import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import LoginStack from "./src/Routes/LoginStack";


const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
