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

    // deep linking stuff
    deepLinkURL: "",
    setDeepLinkURL: (url) => {
        let deepLinkURL = get().deepLinkURL;

        if(url == null) return;
        if(url.trim().length == 0) return;
        if(url == deepLinkURL) return;

        set(state => ({
            deepLinkURL: url
        }));
        set(state => ({
            deepLinkURL: "",
        }));
    },

    // fake data & stuff
    bookmarks: [],
    createBookmark: (bookmark) => {
        set(state => {
            for(let i = 0; i < state.bookmarks.length; i++) {
                let mark = state.bookmarks[i];
                if(mark.id == bookmark.id) {
                    return { };
                }
            }
            // console.log(bookmark);
            // console.log(state.bookmarks);
            return { 
                bookmarks: [
                    ...state.bookmarks,
                    bookmark
                ]
            };
        });
    },
    updateBookmark: (id, data) => {
        let bookmarks = get().bookmarks;
        let index = bookmarks.findIndex(bk => bk.id == id);
        if(index == -1) return false;

        for(let field in data) {
            bookmarks[index][field] = data[field];
        }

        set(state => ({ bookmarks }))
    },
    deleteBookmark: (id) => {
        set(state => ({ 
            bookmarks: state.bookmarks.filter(bookmark => bookmark.id != id)
        }));
    },
    saveBookmarks: (id) => {
        // updates the bookmarks in firebase for this user
    },

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

    // we should probably move some of this logic to a firebase function
    createIntent: async (title, body, category, anonymous) => {
        let user = get().user;
        if(user == null) throw "User not authenticated.";

        if(category == null || category.trim() == "") throw "Category not set."

        let { displayName, pronouns, photoURL, uid } = get().profile;

        if(anonymous) {
            displayName = "Anonymous Slug";
            photoURL = "https://upload.wikimedia.org/wikipedia/commons/d/d8/SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png"
        }

        // Batch write to multiple documents
        let batch = firestore().batch();

        let intent_ref = firestore().collection("Intents").doc();

        let intent = {
            id: intent_ref.id,
            title,
            category,
            anonymous,
            createdAt: firestore.FieldValue.serverTimestamp(),
            received: true,
            assigned: false,
            resolved: false,
        };

        batch.set(intent_ref, intent);
        
        let message_ref = intent_ref.collection("Messages").doc();
        
        let message = {
            profile: {
                uid,
                photoURL,
                displayName,
                pronouns
            },
            body
        };

        batch.set(message_ref, message);
        
        let user_ref = firestore().collection("Users").doc(uid);

        batch.update(user_ref,{
            num_intents: firestore.FieldValue.increment(1),
            intents: firestore.FieldValue.arrayUnion(intent_ref.id)
        });

        return batch.commit();
    },

    resolveIntent: async (id, resolved) => {
        return firestore().collection("Intents").doc(id).update({
            resolved,
        });
    },

    deleteIntent: async (id) => {
        let { uid } = get().user;

        // batch write to multiple documents
        let batch = firestore().batch();

        let intent_ref = firestore().collection("Intents").doc(id);
        
        batch.delete(intent_ref);

        let user_ref = firestore().collection("Users").doc(uid);

        batch.update(user_ref, {
            num_intents: firestore.FieldValue.increment(-1),
            intents: firestore.FieldValue.arrayRemove(id)
        });

        return batch.commit();
    },

    fetchIntents: async () => {
        try {
            let profile = get().profile;

            if(profile == null) return;

            let promises = profile.intents.map(id => firestore().collection("Intents").doc(id).get())
            return (await Promise.all(promises)).map(doc => doc.data())
        } catch(e) {
            console.log(e);
        }
    },

    attachMessagesListenerForIntent: async (id, handler, errorHandler = (e) => console.log(e)) => {
        return firestore().collection("Intents").doc(id).collection("Messages").onSnapshot(snapshot => {
            let docs = []
            snapshot.forEach((doc) => {
                docs.push(doc.data());
            });
            handler(docs);
        }, errorHandler);
    },

    // incomplete
    attachIntentListener: (id, handler, errorHandler = (e) => console.log(e)) => {
        return firestore().collection("Intents").doc(id).onSnapshot(snapshot => {
            handler(snapshot.data());
        }, errorHandler);
    }
}));

export { useStore };