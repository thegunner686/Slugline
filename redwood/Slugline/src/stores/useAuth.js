import create from "zustand";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from '@react-native-firebase/storage';

import { GOOGLE_SIGN_IN_WEB_CLIENT_ID } from "@env";

import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: GOOGLE_SIGN_IN_WEB_CLIENT_ID,
});

const useAuth = create((set, get) => ({
    authEntity: null,
    setAuthEntity: (authEntity) => set(state => ({ authEntity })),

    isNewUser: false,
    setIsNewUser: (isNewUser) => set(state => ({ isNewUser })),

    onAuthStateChanged: (callback) => {
        return auth().onAuthStateChanged(authEntity => {
            if(authEntity) {
                get().onUserSignIn(authEntity);
            } else {
                get().onUserSignOut();
            }
            callback();
        });
    },

    signIn: async () => {
        if(get().authEntity != null) {
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
            console.log(e)
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

    user: null,
    updateUser: async (info) => {
        let { uid } = get().authEntity;
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
        let { uid } = get().authEntity;

        let ref = storage().ref(`Users/${uid}/${filename}`);

        await ref.putFile(uri);
        let url = await ref.getDownloadURL();

        return url;
    },

    userListener: null,
    attachUserListener: (uid) => {
        if(uid == undefined || uid == null) return null;
        // remove the current user listener if one is already instantiated
        get().removeUserListener();
        
        // create the listener
        let listener = firestore().collection("Users").doc(uid).onSnapshot(snapshot => {
            set(state => ({ user: snapshot.data() }))
        }, (error) => {
            console.log(error);
        });

        // set the user listener
        set(state => ({ UserListener: listener }));
    },
    removeUserListener: () => {
        let userListener = get().userListener;
        if(userListener) {
            userListener();
            set(state => ({ userListener: null }));
        }
    },

    updateUserOnSignInTransaction: (authEntity) => {
        let { uid, phoneNumber, email, emailVerified,
              photoURL, displayName } = authEntity;
        let userRef = firestore().collection("Users").doc(uid);

        firestore().runTransaction(async transaction => {
            // get current user user
            const userSnapshot = await transaction.get(userRef);

            // figure out what information we need to write based on if 
            // the user exists or not
            if(!userSnapshot.exists) {
                // New User
                let user_data = {
                    uid,
                    phoneNumber,
                    email,
                    emailVerified,
                    createdAt: firestore.FieldValue.serverTimestamp(),
                    lastLogin: firestore.FieldValue.serverTimestamp(),
                    profile: {
                        picture: photoURL,
                        name: displayName,
                        pronouns: "",
                        college: "",
                        year: "",
                        major: ""
                    }
                }
                return transaction.set(userRef, user_data);
            } else {
                // Returning User
                let user_data = {
                    lastLogin: firestore.FieldValue.serverTimestamp(),
                    phoneNumber,
                    email,
                    emailVerified
                };
                return transaction.update(userRef, user_data);
            }
        }).catch((error) => {
            console.log(error);
        });
    },

    onUserSignIn: (authEntity) => {
        // of course update our store's user 
        get().setAuthEntity(authEntity);

        // make sure the user's user is instatiated on firestore
        get().updateUserOnSignInTransaction(authEntity);

        // attach User listener for newly logged in users
        get().attachUserListener(authEntity.uid);
    },

    onUserSignOut: () => {
        // set user to null
        get().setAuthEntity(null);
        set(state => ({ user: null }));
        
        // remove any listeners
        get().removeUserListener();
    },

    // ENUM {"CREATE", "READ"}
    getPermissions: () => {
        return
    }
}));

export { useAuth };