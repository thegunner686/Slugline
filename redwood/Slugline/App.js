import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
