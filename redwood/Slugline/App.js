import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AuthenticatedStack from './src/routes/AuthenticatedStack';
import SignInStack from "./src/routes/SignInStack";

// Screens
import LoadingScreen from "./src/screens/LoadingScreen";

import { useStore } from "./src/useStore";

function App() {
  let [loading, setLoading] = useState(true);
  let [user] = useStore(state => [state.user]);
  let [onAuthStateChanged] = useStore(state => [state.onAuthStateChanged]);

  useEffect(() => {
      return onAuthStateChanged(() => {
          setLoading(false);
      });
  }, []);

  if(loading) return <LoadingScreen/>;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user == null ?
            <SignInStack />
            :
            <AuthenticatedStack />
        }
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
