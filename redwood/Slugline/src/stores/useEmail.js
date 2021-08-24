import create from "zustand";

import firestore from "@react-native-firebase/firestore";
import storage from '@react-native-firebase/storage';

const useEmail = create((set, get) => ({
	db: firestore(),

	// Create an email
    // Params: (authdata, emaildata)
	createEmail: (user, data) => {
        let db = get().db;
        let id = db.collection("Emails").doc().id;

        let email_ref = db.collection("Emails").doc(id),
        user_ref = db.collection("Users").doc(user.uid);

        let email_data = {
            ...data,
            id,
            organizerRef: user.uid,
            creationTime: firestore.FieldValue.serverTimestamp()
        };

        return db.runTransaction(async transaction => {
            await transaction.set(email_ref, email_data);
        });
    }
}));

export { useEmail };