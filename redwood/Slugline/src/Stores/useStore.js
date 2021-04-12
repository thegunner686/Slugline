import create from "zustand";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from '@react-native-firebase/storage';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '666812137857-bdo9lhprvhi1u5b76e6oju6e1444kqi3.apps.googleusercontent.com',
});

const useStore = create((set, get) => ({
    user: null,
    setUser: (user) => set(state => ({ user })),

    isNewUser: false,
    setIsNewUser: (isNewUser) => set(state => ({ isNewUser })),

    onAuthStateChanged: () => {
        return auth().onAuthStateChanged(user => {
            if(user) {
                get().onUserSignIn(user);
            } else {
                get().onUserSignOut();
            }
        });
    },

    signIn: async () => {
        if(get().user != null) {
            return true;
        }
        try {
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential)
            return true;
        } catch(e) {
            return false;
        }
    },

    signOut: async () => {
        try {
            await auth().signOut();
            return true;
        } catch(e) {
            return false;
        }
    },

    profile: null,
    updateProfile: async (info) => {
        let { uid } = get().user;
        try {
            await firestore().collection("Users").doc(uid).update({
                ...info
            });
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    uploadProfilePicture: async (filename, uri) => {
        let { uid } = get().user;
        // let { uid } = this.firebaseUser;
        // let res = await fetch(uri);
        // let blob = await res.blob();

        let ref = storage().ref(`Users/${uid}/${filename}`);

        await ref.putFile(uri);
        let url = await ref.getDownloadURL();

        return url;
    },

    profileListener: null,
    attachProfileListener: (uid) => {
        if(uid == undefined || uid == null) return null;
        // remove the current profile listener if one is already instantiated
        get().removeProfileListener();
        
        // create the listener
        let listener = firestore().collection("Users").doc(uid).onSnapshot(snapshot => {
            let data = snapshot.data();
            set(state => ({ profile: data }))
        }, (error) => {
            console.log(error);
        });

        // set the profile listener
        set(state => ({ profileListener: listener }));
    },
    removeProfileListener: () => {
        let profileListener = get().profileListener;
        if(profileListener) {
            profileListener();
            set(state => ({ profileListener: null}));
        }
    },

    updateProfileOnSignInTransaction: (user) => {
        let userRef = firestore().collection("Users").doc(user.uid);

        firestore().runTransaction(async transaction => {
            // get current user profile
            const userSnapshot = await transaction.get(userRef);

            // figure out what information we need to write based on if 
            // the user exists or not
            if(!userSnapshot.exists) {
                // New User
                let user_data = {
                    uid: user.uid,
                    displayName: user.displayName,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    createdAt: firestore.FieldValue.serverTimestamp(),
                    lastLogin: firestore.FieldValue.serverTimestamp(),
                    intents: [],
                    num_intents: 0
                }
                return transaction.set(userRef, user_data);
            } else {
                // Returning User
                let user_data = {
                    lastLogin: firestore.FieldValue.serverTimestamp(),
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    emailVerified: user.emailVerified
                };
                return transaction.update(userRef, user_data);
            }
        }).catch((error) => {
            console.log(error);
        });
    },

    onUserSignIn: (user) => {
        // of course update our store's user 
        get().setUser(user);

        // make sure the user's profile is instatiated on firestore
        get().updateProfileOnSignInTransaction(user);

        // attach profile listener for newly logged in users
        get().attachProfileListener(user.uid);
    },

    onUserSignOut: () => {
        // set user to null
        get().setUser(null);
        
        // remove any listeners
        get().removeProfileListener();
    },

    createIntent: async (title, body, category, anonymous) => {
        
    },
}));

export { useStore };