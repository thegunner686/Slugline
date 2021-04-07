import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import SignInStack from "./src/Routes/SignInStack";
import AuthenticatedStack from "./src/Routes/AuthenticatedStack";
import OnboardingStack from "./src/Routes/OnboardingStack";

import auth from '@react-native-firebase/auth';
import { useAuth } from "./src/Stores/useAuth";
import shallow from "zustand/shallow";

function App() {
  let [initializing, setInitializing] = useState(true);

  let [user, setUser] = useAuth(state => [state.user, state.setUser], shallow);
  let [isNewUser, setIsNewuser] = useAuth(state => [state.isNewUser, state.setIsNewuser], shallow);

  function onAuthStateChanged(user) {
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
      {user == null ? 
          <SignInStack/>
        :
          isNewUser ?
          <OnboardingStack/>
          :
          <AuthenticatedStack/>
      }
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
