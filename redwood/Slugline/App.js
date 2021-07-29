import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AuthenticatedStack from './src/routes/AuthenticatedStack';
import SignInStack from "./src/routes/SignInStack";

// Screens
import LoadingScreen from "./src/screens/LoadingScreen";

import remoteConfig from '@react-native-firebase/remote-config';
import default_config from "./default_firebase_remote_config";

import { useAuth } from "./src/stores/useAuth";

function App() {
  let [loading, setLoading] = useState(true);
  let [authEntity] = useAuth(state => [state.authEntity]);
  let [onAuthStateChanged] = useAuth(state => [state.onAuthStateChanged]);

  useEffect(async () => {
    await remoteConfig().fetch(300);
    remoteConfig().setDefaults(default_config).then(() => remoteConfig().fetchAndActivate());
  }, []);

  useEffect(() => {
      return onAuthStateChanged(() => {
          setLoading(false);
      });
  }, []);

  if(loading) return <LoadingScreen/>;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {authEntity == null ?
            <SignInStack />
            :
            <AuthenticatedStack />
        }
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
