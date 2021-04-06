import create from "zustand";
import auth from "@react-native-firebase/auth";

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '666812137857-bdo9lhprvhi1u5b76e6oju6e1444kqi3.apps.googleusercontent.com',
});

const useAuth = create((set, get) => ({

    user: null,
    setUser: (user) => set(state => ({ user })),

    isNewUser: false,
    setIsNewUser: (isNewUser) => set(state => ({ isNewUser })),

    signIn: async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        await auth().signInWithCredential(googleCredential);
    },
    
    signOut: () => {
        auth().signOut();
        set(state => ({
            user: null,
            isNewUser: false
        }));
    }
}));

export { useAuth };