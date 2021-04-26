import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// Routes
import SignInStack from "./src/routes/SignInStack";
import AuthenticatedStack from "./src/routes/AuthenticatedStack";
import OnboardingStack from "./src/routes/OnboardingStack";

import { useStore } from "./src/useStore";
import shallow from "zustand/shallow";

function App() {
  let [initializing, setInitializing] = useState(true);

  let [user, setUser] = useStore(state => [state.user, state.setUser], shallow);
  let [isNewUser, setIsNewuser] = useStore(state => [state.isNewUser, state.setIsNewuser], shallow);
  let onAuthStateChanged = useStore(state => state.onAuthStateChanged);

  useEffect(() => {
    return onAuthStateChanged();
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
