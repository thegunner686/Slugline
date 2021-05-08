import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import { Linking } from "react-native";

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
  let [setDeepLinkURL] = useStore(state => [state.setDeepLinkURL]);
  let onAuthStateChanged = useStore(state => state.onAuthStateChanged);

  useEffect(() => {
    return onAuthStateChanged();
  }, []);


  useEffect(async () => {
      let url = await Linking.getInitialURL();
      setTimeout(() => {
          setDeepLinkURL(url);
          // onReceiveNavigateURL(url);
      }, 100);
  }, []);

  useEffect(() => {
      return Linking.addEventListener("url", ({ url }) => {
          setTimeout(() => {
              setDeepLinkURL(url);
              // onReceiveNavigateURL(url);
          }, 100)
      });
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        linking={{
          prefixes: ["slugline://"],
          config: {
            screens: {
              Navigate: {
                screens: {
                  Navigate: {
                    path: "navigate"
                  }
                }
              }
            }
          }
        }}
      >
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
